import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    place: "1",
    username: "John Doe",
    gmail: "john.doe@gmail.com",
    score: "120",
  },
  {
    place: "2",
    username: "Jane Smith",
    gmail: "jane.smith@gmail.com",
    score: "110",
  },
  {
    place: "3",
    username: "Alice Johnson",
    gmail: "alice.johnson@gmail.com",
    score: "105",
  },
  {
    place: "4",
    username: "Bob Williams",
    gmail: "bob.williams@gmail.com",
    score: "100",
  },
  {
    place: "5",
    username: "Emma Brown",
    gmail: "emma.brown@gmail.com",
    score: "95",
  },
];

function Page() {
  return (
    <div className="max-w-4xl mx-auto my-16 px-6">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">Leaderboard</h2>
          <p className="text-sm text-gray-500">Top players by score</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 text-gray-700 text-base">
              <TableHead className="w-[80px] px-6 py-3">Place</TableHead>
              <TableHead className="px-6 py-3">Username</TableHead>
              <TableHead className="px-6 py-3">Gmail</TableHead>
              <TableHead className="px-6 py-3 text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.place}
                className="hover:bg-gray-50 transition-colors"
              >
                <TableCell className="px-6 py-4 font-medium text-gray-900">
                  {invoice.place}
                </TableCell>
                <TableCell className="px-6 py-4 text-gray-700">
                  {invoice.username}
                </TableCell>
                <TableCell className="px-6 py-4 text-gray-700">
                  {invoice.gmail}
                </TableCell>
                <TableCell className="px-6 py-4 text-right text-gray-700">
                  {invoice.score}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Page;
