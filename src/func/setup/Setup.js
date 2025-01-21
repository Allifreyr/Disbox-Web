import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import styles from '../../css/app.module.css';
import NavigationBar from '../search/NavigationBar';

function Setup() {
    const navigate = useNavigate();

    const onContinue = (event) => {
        event.preventDefault();
        const webhookUrl = document.getElementById("webhookUrl").value;
        localStorage.setItem("webhookUrl", webhookUrl);
        navigate("/");
    };
    return (<div className={styles['App-header']}>
        <NavigationBar />
        <div className={styles['setup-container']}>
          <h1 className={styles['setup-title']}>
            <b>Setup</b>
          </h1>
          <h2 className={styles['setup-subtitle']}>
            <b>Just a few steps and we're ready to go.</b>
          </h2>
          <div className={styles['instructions']}>
            <div className={styles['instruction-item']}>
              <b className={styles['instruction-number']}>1.</b> Open a{" "}
              <a
                href="https://discord.com/app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>{" "}
              account, if you don't already have one.
            </div>
            <div className={styles['instruction-item']}>
              <b className={styles['instruction-number']}>2.</b> Open a new server. Don't
              share this server with anyone, as it will be used to store your
              files.
            </div>
            <div className={styles['instruction-item']}>
              <b className={styles['instruction-number']}>3.</b> Open <b>Server Settings</b>{" "}
              from the top left menu, select <b>Integrations</b> and click{" "}
              <b>Create Webhook</b>.
            </div>
            <div className={styles['instruction-item']}>
              <b className={styles['instruction-number']}>4.</b> Copy the URL of the webhook
              you just created by clicking on the <b>Copy Webhook URL</b> button.
            </div>
            <div className={styles['instruction-item']}>
              This URL will be used as your password for the Disbox client and it
              provides full access to all your files, so don't share it with
              anyone or store it anywhere. You can always access this URL from the
              Integrations menu again if you forget it.
            </div>
            <div className={styles['instruction-item']}>
              <b className={styles['instruction-number']}>5.</b> Paste your URL here:
            </div>
          </div>
          <Form onSubmit={onContinue}>
            <Form.Group>
              <Form.Control
                id="webhookUrl"
                type="password"
                placeholder="Webhook URL"
                className={styles['webhook-input']}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className={styles['continue-button']}
            >
              <b>Continue</b>
            </Button>
          </Form>
        </div>
      </div>

    );
}

export default Setup;
