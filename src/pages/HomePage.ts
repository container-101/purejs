import { Component } from '@src/core/purifier/Component';
import { Accordion, ThemeSwitch } from '@src/components/common';

export default class HomePage extends Component<unknown> {
  render() {
    return `
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="flex items-end space-x-2">
      <div class="theme-button"></div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div id="accordion-comp-01"></div>
<div id="accordion-comp-02"></div>
    `;
  }

  mounted() {
    const tbutton = this.$target.querySelector('.theme-button');
    new ThemeSwitch(tbutton, {});

    const accordionTag01 = this.$target.querySelector('#accordion-comp-01');
    const accordionTag02 = this.$target.querySelector('#accordion-comp-02');
    new Accordion(accordionTag01, { key: 'accordion-comp-01' });
    new Accordion(accordionTag02, { key: 'accordion-comp-02' });
  }

  handleOnClick() {
    window.location.hash = '/four';
  }
}
