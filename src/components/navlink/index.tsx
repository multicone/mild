import { Link, matchRoutes, useLocation, useResolvedPath } from "react-router-dom";
import { routes } from "../../routes";

export interface INavlinkProps {
    to: string;
    exact?: boolean;
    className?: string;
    activeClassName?: string;
    inactiveClassName?: string;
    children?: any;
    onClick?: () => void;
}
export function Navlink({
    to,
    exact,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
}: INavlinkProps) {
    let location = useLocation();
    let resolvedLocation = useResolvedPath(to);
    let routeMatches = matchRoutes(routes, location);

    let isActive;
    if (exact) {
        isActive = location.pathname === resolvedLocation.pathname;
    } else {
        isActive = routeMatches?.some(
            (match) => match.pathname === resolvedLocation.pathname
        );
    }

    let allClassNames =
        className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);

    return <Link className={allClassNames} to={to} {...rest} />;
}