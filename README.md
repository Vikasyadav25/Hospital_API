# Hospital_API
We’re going to design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients<BR>
## How to Use

1. Clone or download this repository to your local machine.

2. git clone https://github.com/Vikasyadav25/CSV_FILE_UPLOAD

3. npm start
# Task
####  Theme:
- We’re going to design an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients.<br>
### There can be 2 types of Users
##### - Doctors
##### - Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

- Date
## - Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status


## DEMO
Hosted Link --- https://hospital-api-8x8b.onrender.com/


Image -: 
1) http://localhost:8000/
![image](https://github.com/Vikasyadav25/Hospital_API/assets/91658308/c3c59e09-409e-490c-a463-523d35387c5c)

2) http://localhost:8000/doctors/register
![image](https://github.com/Vikasyadav25/Hospital_API/assets/91658308/9a8471dc-c3e9-4293-9ab6-9edc995dfe24)

3) http://localhost:8000/doctors/login
![image](https://github.com/Vikasyadav25/Hospital_API/assets/91658308/cb15a8e8-acfb-4494-8bc8-ca835417f2e9)

4) http://localhost:8000/patients/register
![image](https://github.com/Vikasyadav25/Hospital_API/assets/91658308/3e882f16-d909-45fb-9df7-ca2a08adac82)

5) http://localhost:8000/patients/65336629a056cf06f3a0ae28/create-report
![image](https://github.com/Vikasyadav25/Hospital_API/assets/91658308/33600773-aebf-41ee-929f-9e5318a16209)

6) http://localhost:8000/report/malariaaw
![image](https://github.com/Vikasyadav25/Hospital_API/assets/91658308/a76f39d6-265a-4b5f-9da9-217a9c9beb06)


## Author
Vikas Yadav
