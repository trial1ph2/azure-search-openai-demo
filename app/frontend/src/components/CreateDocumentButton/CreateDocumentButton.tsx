import { ArrowDownload24Regular } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";

import styles from "./CreateDocumentButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export const CreateDocumentButton = ({ className, disabled, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""}`}>
            <Button icon={<ArrowDownload24Regular />} disabled={disabled} onClick={onClick}>
                {"Download document"}
            </Button>
        </div>
    );
};