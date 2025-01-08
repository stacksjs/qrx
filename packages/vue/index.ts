import type { BarcodeOptions } from '@stacksjs/qrx'
import type { Component, PropType } from 'vue'
import { barcode } from '@stacksjs/qrx'
import { defineComponent, h } from 'vue'

interface BarcodeData {
  valid: boolean
}

export const VueBarcode: Component = defineComponent({
  name: 'VueBarcode',

  render() {
    return h('div', [
      h(this.elementTag, {
        style: { display: this.valid ? undefined : 'none' },
        class: ['vue-barcode-element'],
      }),

      h('div', {
        style: { display: this.valid ? 'none' : undefined },
      }, this.$slots.default?.()),
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
      validator(value: string): boolean {
        return ['canvas', 'svg', 'img'].includes(value)
      },
    },
  },

  data(): BarcodeData {
    return { valid: true }
  },

  watch: {
    $props: {
      handler() {
        this.renderBarcode()
      },
      deep: true,
      immediate: true,
    },
  },

  mounted() {
    this.renderBarcode()
  },

  methods: {
    renderBarcode() {
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
        valid: (valid: boolean) => {
          this.valid = valid
        },
        elementTag: this.elementTag,
      }

      this.removeUndefinedProps(settings)

      const element = this.$el.querySelector('.vue-barcode-element')
      if (element) {
        barcode(element, String(this.value), settings)
      }
    },

    removeUndefinedProps(obj: BarcodeOptions): void {
      for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          const value = obj[prop as keyof BarcodeOptions]
          if (value === undefined) {
            delete obj[prop as keyof BarcodeOptions]
          }
        }
      }
    },
  },
})
