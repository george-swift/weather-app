const attributes = (() => ({
  navbar: {
    icon: {
      alt: 'weather icon',
      class: 'border border-1 rounded-circle icon me-2',
    },
  },
  highlight: {
    section: {
      class: 'col-md-4',
    },
    wrapper: {
      class: 'center flex-column',
    },
    location: {
      class: 'display-6',
      id: 'location-name',
    },
    description: {
      id: 'weather-description',
    },
    temperature: {
      class: 'display-1 temperature',
    },
  },
  widgets: {
    section: {
      class: 'col-md-8 pe-0',
    },
    div: {
      class: 'd-flex overflow-auto border-top border-bottom',
    },
    wrapper: {
      class: 'py-3 px-3 flex-column center col-2',
    },
    icon: {
      alt: 'widget',
      class: 'weather-icons',
    },
  },
  measurements: {
    section: {
      class: 'col-md-6 offset-md-3 mt-5 py-5 bg-dark bg-gradient',
    },
    wrapper: {
      class: 'row flex-column flex-md-row list-group-flush',
    },
    list: {
      class: 'list-group-item border-0 col bg-transparent text-smoke text-md-center',
    },
  },
}))();

export default attributes;