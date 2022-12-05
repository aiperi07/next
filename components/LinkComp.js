import Link from "next/link";

const LinkComp = ({href,text}) => {
    return (
        <Link href={href}>
            {text}
        </Link>
    );
};

export default LinkComp;