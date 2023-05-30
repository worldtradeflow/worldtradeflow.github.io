class SelectControl {
  constructor({ container, label, id, options, initialValue, onChange }) {
    this.container = container;
    this.label = label;
    this.id = id;
    this.options = options;
    this.initialValue = initialValue;
    this.onChange = onChange;
    this.init();
  }

  init() {
    this.container
      .append("label")
      .attr("class", "col-form-label col-form-label-sm")
      .attr("for", this.id)
      .text(this.label);
    
    
    // shown label by text order
    this.options.sort((a, b) => {
      return (a.text > b.text) ? 1 : -1;
    });
    // console.log('this.options in selection-control:\n', ops);

    this.container
      .append("select")
      .attr("class", "form-select form-select-sm")
      .attr("id", this.id)
      .on("change", (event) => {
        this.onChange(event.currentTarget.value);
      })
      .selectAll("option")
      .data(this.options)
      .join("option")
      .attr("value", (d) => d.value)
      .attr("selected", (d) => (d.value === this.initialValue ? "" : null))
      .text((d) => d.text);
  }
}
