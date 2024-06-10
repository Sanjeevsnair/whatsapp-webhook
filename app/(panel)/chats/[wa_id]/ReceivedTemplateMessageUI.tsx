import { MessageTemplate, MessageTemplateButtons, MessageTemplateButton,MessageTemplateHeader,MessageTemplateBody,MessageTemplateFooter } from "../../../../types/message-template-response";

export default function ReceivedTemplateMessageUI(props: { messageTemplate: MessageTemplate }) {
    const { messageTemplate } = props;

    // Extract relevant information from the message template
    const { components } = messageTemplate;

    // Render different components of the message template
    const renderComponents = () => {
        return components.map((component, index) => {
            switch (component.type) {
                case "HEADER":
                    return renderHeader(component as MessageTemplateHeader, index);
                case "BODY":
                    return renderBody(component as MessageTemplateBody, index);
                case "FOOTER":
                    return renderFooter(component as MessageTemplateFooter, index);
                case "BUTTONS":
                    return renderButtons(component as MessageTemplateButtons, index);
                default:
                    return null;
            }
        });
    };

    const renderHeader = (header: MessageTemplateHeader, index: number) => {
        return (
            <div key={index}>
                {header.text}
            </div>
        );
    };

    const renderBody = (body: MessageTemplateBody, index: number) => {
        return (
            <div key={index}>
                {body.text}
            </div>
        );
    };

    const renderFooter = (footer: MessageTemplateFooter, index: number) => {
        return (
            <div key={index}>
                {footer.text}
            </div>
        );
    };

    const renderButtons = (buttons: MessageTemplateButtons, index: number) => {
        const { buttons: buttonComponents } = buttons;
        return (
            <div key={index}>
                {buttonComponents.map((button, buttonIndex) => renderButton(button, buttonIndex))}
            </div>
        );
    };

    const renderButton = (button: MessageTemplateButton, index: number) => {
        return (
            <button key={index} onClick={() => handleButtonClick(button)}>
                {button.text}
            </button>
        );
    };

    const handleButtonClick = (button: MessageTemplateButton) => {
        // Handle button click based on the button type
        if (button.type === "URL") {
            // Handle URL button click
            if (button.url) {
                window.open(button.url, "_blank");
            }
        } else if (button.type === "QUICK_REPLY") {
            // Handle quick reply button click
            if (button.quickReplyText) {
                // Perform action with quick reply text
            }
        }
    };

    return (
        <div>
            {renderComponents()}
        </div>
    );
}
