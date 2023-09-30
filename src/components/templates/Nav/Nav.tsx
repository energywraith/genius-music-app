import { Brand } from "@/components/common/Brand";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { InputField } from "@/components/form/InputField";
import { NavLink } from "./NavLink";
import { routes } from "./routes";

const Nav = () => {
  return (
    <nav className="flex items-center max-w-screen-xl mx-auto my-4">
      <ul className="flex gap-x-6 flex-1 ml-4">
        {routes.map((route) => (
          <NavLink key={route.label} href={route.href}>
            {route.label}
          </NavLink>
        ))}
      </ul>
      <Brand />
      <div className="flex flex-1 mr-4">
        <InputField
          name="search"
          placeholder="Search..."
          className="ml-auto"
          Icon={SearchIcon}
          inputProps={{
            className: "max-w-[16rem]",
          }}
        />
      </div>
    </nav>
  );
};

export { Nav };
