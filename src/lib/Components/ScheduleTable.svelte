<script>
    export let schedule;
  </script>
  
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Topic</th>
        <th>Speaker</th>
      </tr>
    </thead>
    <tbody>
      {#each schedule as event}
        <tr>
          <td>{event.date}</td>
          <td>{event.time}</td>
          <td>{event.topic}</td>
          <td>{event.speaker}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #6a11cb;
      color: white;
    }
    tr:hover {
      background-color: #f5f5f5;
    }
  </style>