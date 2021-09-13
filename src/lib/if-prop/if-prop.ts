import { Interpolation } from "@emotion/styled";

/**
 * Returns `pass` if prop is truthy. Otherwise returns `fail`
 *
 * @example
 * const Button = styled.button`
 *   color: ${ifProp("transparent", "transparent", "black")};
 * `;
 *
 * <Button /> // color = "black";
 * <Button transparent /> // color = "transparent";
 */
export function ifProp<P extends Object, K extends keyof P = keyof P>(
  name: K,
  pass: Interpolation<P> = "",
  fail: Interpolation<P> = ""
) {
  return (props: P) => {
    const isPass = Boolean(props[name]);

    const result = isPass ? pass : fail;

    return typeof result === "function" ? result(props) : result;
  };
}
