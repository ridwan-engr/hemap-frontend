export default function FaultTable({
  faults,
  onResolve
}) {

  return (
    <table
      border="1"
      width="100%"
    >
      <thead>
        <tr>
          <th>Site</th>
          <th>Fault</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {faults.map(
          (fault) => (

          <tr key={fault._id}>

            <td>
              {
                fault.siteId
                  ?.siteName
              }
            </td>

            <td>
              {
                fault.faultType
              }
            </td>

            <td>
              {
                fault.status
              }
            </td>

            <td>

              {fault.status !==
                "resolved" && (

                <button
                  onClick={() =>
                    onResolve(
                      fault._id
                    )
                  }
                >
                  Resolve
                </button>

              )}

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}