import {Alert} from "@material-tailwind/react";

class AlertFactory {
    static createAlert(statusCode, message, className = "") {
        switch (statusCode) {
            case 200:
                return AlertFactory.createSuccessAlert(message, className);
            case 400:
                return AlertFactory.createErrorAlert(message, className);
            case 404:
                return AlertFactory.createNotFoundAlert(message, className);
            case -1:
                return AlertFactory.createNetworkErrorAlert(message, className);
            // Add more cases as needed for other status codes
            default:
                return null;
        }
    }

    static createSuccessAlert(message, className = "") {
        return <Alert className={className}>{message}</Alert>;
    }

    static createErrorAlert(message, className = "") {
        return <Alert color="red" variant="gradient" className={className}>{message}</Alert>;
    }

    static createNotFoundAlert(message, className = "") {
        return <Alert color="orange" variant="ghost" className={className}>{message}</Alert>;
    }

    static createNetworkErrorAlert(message, className = "") {
        return (
            <Alert color="red" variant="gradient" className={className}>خطا در برقراری ارتباط با اینترنت!</Alert>
        );
    }
}

export default AlertFactory;
