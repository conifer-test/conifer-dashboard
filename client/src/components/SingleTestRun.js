import Table from "./Table";
import TestRunTile from "./TestRunTile";
import { useParams } from "react-router-dom";
import BreadCrumbs from "./Breadcrumbs";

const SingleTestRun = () => {
  const { id } = useParams();

  return (
    <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
      <div className="container mx-auto mt-12">
        <BreadCrumbs testRunID={id}/>
        
        <TestRunTile testRunID={id} />
        <Table />
      </div>
    </div>
  )
}

export default SingleTestRun;