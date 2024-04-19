/**
 * API Key Generation Handler
 */

class ApiKey {

  constructor(client_id, licence_key, host) {
    this.client_id = client_id;
    this.licence_key = licence_key;
    this.host = host;
  }

  async generateApiKey(nonce, dt = new Date()) {
    const data = {
      "clientid": this.client_id,
      "licencekey": this.licence_key
    }

    const response = await fetch(`${this.host}/v6/authenticate`, {
      method: "POST", //
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonResponse = await response.json();

    return jsonResponse.key
  }

}

export default ApiKey;
