const BreadcrumbsList = ({ children }) => {
  return (
    <nav className="hidden lg:flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {children}
      </ol>
    </nav>
  );
};

export default BreadcrumbsList;
