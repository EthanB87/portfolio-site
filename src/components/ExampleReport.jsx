import { VISIBILITY } from '../data'

// A clearly labelled, made-up sample of the monthly report. Not a real client.
export default function ExampleReport() {
  const r = VISIBILITY.sampleReport
  return (
    <figure className="report">
      <figcaption className="report-label">
        <strong>Example report.</strong> The business and numbers below are made up, to show what
        you'd get each month. This is not a real client.
      </figcaption>
      <div className="report-body">
        <h3>
          {r.business}, {r.town}
        </h3>
        <p className="report-q">
          Question: &ldquo;{r.question}&rdquo;, asked {r.asked} times in each tool
        </p>
        <table>
          <caption className="visually-hidden">
            How often each AI tool named the business, month 1 and month 3
          </caption>
          <thead>
            <tr>
              <th scope="col">AI tool</th>
              <th scope="col">Month 1</th>
              <th scope="col">Month 3</th>
            </tr>
          </thead>
          <tbody>
            {r.rows.map((row) => (
              <tr key={row.tool}>
                <th scope="row">{row.tool}</th>
                <td>
                  <span className="bar" style={{ '--v': row.before / r.asked }} />
                  {row.before} of {r.asked}
                </td>
                <td>
                  <span className="bar after" style={{ '--v': row.after / r.asked }} />
                  {row.after} of {r.asked}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>What changed this month</h4>
        <ul className="ticks">
          {r.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </figure>
  )
}
