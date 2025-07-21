import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'po-input',
  styleUrl: 'po-input.css',
  shadow: true,
})
export class PoInput {
  @Prop({ mutable: true }) value: string;

  @Event() valueChange: EventEmitter<string>;

  private onInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value); // importante para ngModel!
  };

  render() {
    return (
      <>
        <input type="text" value={this.value} onInput={this.onInput} />
        teste
      </>
    );
  }
}
