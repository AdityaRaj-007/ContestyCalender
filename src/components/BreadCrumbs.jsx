import { ChevronRight, Home } from "lucide-react";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  console.log(location.pathname);
  const path = location.pathname.split("/");
  const paths = path.filter((p) => p !== "");
  console.log(paths);
  return (
    <nav className="w-full text-sm">
      <ol className="flex items-center space-x-1">
        <li className="items-center hover:text-red-800">
          <Link to="/" className="flex items-center">
            <Home className="mr-2" width={15} />
            <span>Home</span>
          </Link>
        </li>
        {paths.map((el, index) => {
          const isLast = index === paths.length - 1;
          console.log(isLast);
          console.log(el);
          const isNotNumber = isNaN(el);
          return (
            <React.Fragment key={index}>
              <li className="text-slate-600">
                {isNotNumber && <ChevronRight width={15} />}
              </li>
              <li className="items-center hover:text-red-800">
                {isLast ? (
                  <span className="text-slate-600 capitalize">{el}</span>
                ) : (
                  isNotNumber && (
                    <Link to={`/${el}`} className="capitalize">
                      {el}
                    </Link>
                  )
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
