import { View } from './view.js';
export class NegociacoesView extends View {
    template(model) {
        return `
     <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>Data</th>
          <th>Quantidade</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        ${model
            .lista()
            .map((res) => {
            return `
            <tr>
              <td>${new Intl.DateTimeFormat().format(res.data)}</td>
              <td>${res.quantidade}</td>
              <td>${res.valor}</td>
            </tr>
            `;
        })
            .join('')}
      </tbody>
    </table>
    `;
    }
}
