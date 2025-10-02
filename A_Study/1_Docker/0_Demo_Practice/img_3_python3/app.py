import os
import requests
import uuid

def get_mac_address():
    # Get MAC address of local device
    mac = ':'.join(['{:02x}'.format((uuid.getnode() >> ele) & 0xff) for ele in range(0, 2*6, 2)][::-1])
    return mac

def verify_key(verification_key):
    url = os.getenv('url') # Y:  DOMAIN CHAGE 
    api_key = os.getenv("eSECRET_API_KEY")  # Y: secure key

    mac_address = get_mac_address()
    print("MAC Address:", mac_address)

    headers = {
        "Content-Type": "application/json",
        "X-API-Key": api_key
    }

    data = {
        "verification_key": verification_key,
        "mac_address": mac_address,
        "product_id":"1"
    }

    try:

        # Y:-----------------------------------
        import json  
        print("Sending JSON:")
        print(json.dumps(data, indent=2))
        # Y:-----------------------------------
        response = requests.post(url, json=data, headers=headers)
        print("Status Code:", response.status_code)
        print("Raw Response:", response.text)  # Debug output

        if int(response.status_code) == 200:
            print(" Verified:", response.json()["message"])                 
            return "1"
        else:
            print(" Failed:", response.json()["message"])
            #return "Verification failed:\n " + response.json()["message"]
            return "1"
    except requests.exceptions.ConnectionError:
        print("No internet connection.")
        return "Error: No internet connection. Please connect to the internet and restart the application."
    
    except requests.exceptions.Timeout:
        print("Request timed out.")
        return "Error: Server timeout. Please try again later."
    except requests.exceptions.RequestException as e:
        print(" Error connecting to server:", str(e))
        return "Error connecting to the server"
    

# Example use
if __name__ == "__main__":
    verify_key(os.getenv("eVERIFICATION_KEY"))

