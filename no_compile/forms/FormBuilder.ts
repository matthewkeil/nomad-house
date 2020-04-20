// export class FormBuilder {
//   private fields = [];
//   constructor(public h: any) {}

//   setFields(fields: any[]) {
//     this.fields.push(
//       fields.map(field =>
//         this.formInput(
//           this.h(
//             'input',
//             {
//               class: { input: true },
//               domProps: { type: field.type || 'text', placeholder: field.name, name: field.name }
//             },
//             field
//           )
//         )
//       )
//     );
//   }

//   setSubmit(text) {
//     this.fields.push(
//       this.formButton(
//         this.h('input', {
//           class: 'button is-link',
//           domProps: { type: 'submit', value: text }
//         }),
//         { value: text }
//       )
//     );
//   }
// }
