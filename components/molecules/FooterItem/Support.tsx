import SupportItem from "./SupportItem";

export default function Support() {
  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
      <ul className="list-unstyled">
        <SupportItem title="Refund Policy" href="/refund-policy" />
        <SupportItem title="Unlock Rewards" href="/unlock-rewards" />
        <SupportItem title="Live Chatting" href="/live-chat" />
      </ul>
    </>
  );
}
