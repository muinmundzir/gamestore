import ConnectItem from "./ConnectItem";

export default function Connect() {
  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
      <ul className="list-unstyled">
        <ConnectItem title="hi@store.gg" href="mailto: hi@store.gg" />
        <ConnectItem title="team@store.gg" href="mailto: team@store.gg" />
        <ConnectItem title="Pasific 12, Jakarta Selatan" href="http://maps.google.com/?q=Pasific 12, Jakarta Selatan" />
        <ConnectItem title="021 - 1122 - 9090" href="tel: 02111229090" />
      </ul>

    </>
  );
}
