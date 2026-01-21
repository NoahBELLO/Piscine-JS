/* 
Chargement différé et optimisations
Implémentez le chargement paresseux d'images, de modules et le défilement infini pour optimiser les performances.

Objectifs :
✅ Chargement paresseux d' images avec IntersectionObserver
✅ Lazyload de modules avec import dynamique
✅ Implémenter l' infinite scroll
✅ Surveiller les performances
Fonctionnalités à implémenter :
class LazyImageLoader {
  observe(element)         // Observer image
  loadImage(img)          // Charger image
}

class ComponentLoader {
  async load(name)        // Charger module
  async render(name, el)  // Render composant
}

class InfiniteScroll {
  async load()            // Charger page suivante
}
*/

class LazyImageLoader {
  constructor() {
    this.observer = new IntersectionObserver(this.onIntersection.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
  }

  observe(element) {
    this.observer.observe(element);
  }

  onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadImage(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  }

  loadImage(img) {
    const src = img.getAttribute('data-src');
    if (src) {
      img.src = src;
      img.removeAttribute('data-src');
    }
  }
}

class ComponentLoader {
  async load(name) {
    return await import(`./components/${name}.js`);
  }

  async render(name, el) {
    const module = await this.load(name);
    if (module && module.default) {
      const component = new module.default();
      el.appendChild(component.render());
    }
  }
}

class InfiniteScroll {
  constructor(loadMoreCallback) {
    this.page = 0;
    this.loading = false;
    this.loadMoreCallback = loadMoreCallback;

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  async load() {
    if (this.loading) return;
    this.loading = true;
    this.page += 1;
    await this.loadMoreCallback(this.page);
    this.loading = false;
  }

  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      this.load();
    }
  }
}

const lazyLoader = new LazyImageLoader();
document.querySelectorAll('img[data-src]').forEach(img => lazyLoader.observe(img));

const componentLoader = new ComponentLoader();
componentLoader.render('MyComponent', document.getElementById('component-container'));

const infiniteScroll = new InfiniteScroll(async (page) => {
  const response = await fetch(`/api/data?page=${page}`);
  const data = await response.json();
  const container = document.getElementById('data-container');
  data.items.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item.name;
    container.appendChild(div);
  });
});