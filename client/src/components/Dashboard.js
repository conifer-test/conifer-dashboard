import Table from "./Table";
import TestRunCard from "./TestRunCard";

const Dashboard = () => {

  return (
    <div class="w-full px-4 py-2 bg-gray-200 lg:w-full">
      <div class="container mx-auto mt-12">
          
          <div class="grid gap-4 lg:grid-cols-1">
              <TestRunCard testRunID={'05e10cd8-a4a1-4282-805e-43705b504b4a'} />
              <TestRunCard testRunID={'6ff736cd-80da-4694-a1f2-7ec50dcd1933'} />
          </div>

          <Table />

      </div>
    </div>
  );
}

export default Dashboard;