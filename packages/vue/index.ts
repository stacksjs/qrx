import type { BarcodeOptions } from '@stacksjs/qrx'
import type { PropType } from 'vue'
import { barcode } from '@stacksjs/qrx'

interface BarcodeData {
  valid: boolean
}

export const VueBarcode = {
  name: 'VueBarcode',

  render(createElement: any): any {
    return createElement('div', [
      createElement(this.elementTag, {
        style: { display: this.valid ? undefined : 'none' },
        class: ['vue-barcode-element'],
      }),

      createElement('div', {
        style: { display: this.valid ? 'none' : undefined },
      }, this.$slots.default),
    ])
  },

  props: {
    value: {
      type: [String, Number] as PropType<string | number>,
      required: true,
    },

    format: {
      type: String as PropType<string>,
    },

    width: {
      type: [String, Number] as PropType<string | number>,
    },

    height: {
      type: [String, Number] as PropType<string | number>,
    },

    displayValue: {
      type: [String, Boolean] as PropType<string | boolean>,
      default: true,
    },

    text: {
      type: [String, Number] as PropType<string | number>,
    },

    fontOptions: {
      type: String as PropType<string>,
    },

    font: {
      type: String as PropType<string>,
    },

    textAlign: {
      type: String as PropType<string>,
    },

    textPosition: {
      type: String as PropType<string>,
    },

    textMargin: {
      type: [String, Number] as PropType<string | number>,
    },

    fontSize: {
      type: [String, Number] as PropType<string | number>,
    },

    background: {
      type: String as PropType<string>,
    },

    lineColor: {
      type: String as PropType<string>,
    },

    margin: {
      type: [String, Number] as PropType<string | number>,
    },

    marginTop: {
      type: [String, Number] as PropType<string | number>,
    },

    marginBottom: {
      type: [String, Number] as PropType<string | number>,
    },

    marginLeft: {
      type: [String, Number] as PropType<string | number>,
    },

    marginRight: {
      type: [String, Number] as PropType<string | number>,
    },

    flat: {
      type: Boolean as PropType<boolean>,
    },

    ean128: {
      type: [String, Boolean] as PropType<string | boolean>,
    },

    elementTag: {
      type: String as PropType<string>,
      default: 'svg',
      validator(value: string) {
        return ['canvas', 'svg', 'img'].includes(value)
      },
    },
  },

  data(): BarcodeData {
    return { valid: true }
  },

  mounted(): void {
    this.$watch('$props', () => render.call(this), { deep: true, immediate: true })
    render.call(this)
  },
} as const

function render(this: InstanceType<typeof VueBarcode>): void {
  // eslint-disable-next-line ts/no-this-alias
  const self = this

  const settings: BarcodeOptions = {
    format: this.format,
    width: this.width,
    height: this.height,
    displayValue: this.displayValue,
    text: this.text,
    fontOptions: this.fontOptions,
    font: this.font,
    textAlign: this.textAlign,
    textPosition: this.textPosition,
    textMargin: this.textMargin,
    fontSize: this.fontSize,
    background: this.background,
    lineColor: this.lineColor,
    margin: this.margin,
    marginTop: this.marginTop,
    marginBottom: this.marginBottom,
    marginLeft: this.marginLeft,
    marginRight: this.marginRight,
    flat: this.flat,
    ean128: this.ean128,
    valid(valid: boolean) {
      self.valid = valid
    },
    elementTag: this.elementTag,
  }

  removeUndefinedProps(settings)

  barcode(this.$el.querySelector('.vue-barcode-element'), String(this.value), settings)
}

function removeUndefinedProps(obj: BarcodeOptions): void {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop] === undefined) {
      delete obj[prop]
    }
  }
}
