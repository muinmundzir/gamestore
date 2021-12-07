import Link from 'next/link';

interface SupportItemProps {
  title: string;
  href: string;
}

export default function SupportItem(props: SupportItemProps) {
  const { title, href = '/' } = props;
  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{ title }</a>
      </Link>
    </li>
  );
}
