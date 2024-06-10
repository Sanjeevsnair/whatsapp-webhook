import { QuickReplyMessage } from "../../../../types/Message";

export default function ReceivedQuickReplyMessageUI(props: { quickReplyMessage: QuickReplyMessage }) {
    const { quickReplyMessage } = props;
    return (
        <>
            {quickReplyMessage.quickReply.body}
        </>
    );
}
