import { getAllProjects } from "@/actions/poject";

const DashboardPage = async () => {
  const userProjects = await getAllProjects();

  // if (userProjects.status !== 200 || !userProjects.projects) {
  //   return <div>No projects found</div>;
  // }

  return (
    <div className="w-full flex flex-col gap-6 relative ">
      <div className="flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className=" flex flex-col items-start">
          <h1 className="text-2xl font-semibold dark:text-primary backdrop-blur-lg">
            Projects
          </h1>
          <p className="text-base font-normal dark:text-secondary">
            All of your past works in one place
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
