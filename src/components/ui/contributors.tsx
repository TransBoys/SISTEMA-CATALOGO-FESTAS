
import Image from "next/image";

export function Contributors() {
  return (
    <div>
      <a
        href="https://github.com/fiatjaf"
        className="mr-2 inline-block h-8 w-8 rounded-full"
        data-hovercard-type="user"
        data-hovercard-url="/users/fiatjaf/hovercard"
        data-octo-click="hovercard-link-click"
        data-octo-dimensions="link_type:self"
      >
        <Image
          src="https://avatars.githubusercontent.com/u/1653275?s=64&amp;v=4"
          width={64}
          height={64}
          alt="@fiatjaf"
          className="rounded-full"
        />
      </a>
      <a
        href="https://github.com/scsibug"
        className="mr-2 inline-block h-8 w-8 rounded-full"
        data-hovercard-type="user"
        data-hovercard-url="/users/scsibug/hovercard"
        data-octo-click="hovercard-link-click"
        data-octo-dimensions="link_type:self"
      >
        <Image