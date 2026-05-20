import {ref, computed} from 'vue'

// const isPharmacy = ref(false);

// const file = ref({
//     fileType: '',
//     claimType: '',
//     content: []
// });

const claimObject = ref({
    icn: Math.floor(Math.random() * 1000000000) + '',
    lastName: '',
    firstName: '',
    memberId: '',
    birthdate: '',
    gender: '',
    totalAmount: '',
    diagnosis: '',
    procedure: '',
    lineAmount: '',
    serviceDate: '',
})
const dateArray = new Date().toISOString().substring(0, 10).split('-');
const date = dateArray[0] + dateArray[1] + dateArray[2]; 

const filename = ref(`HT000015-300_${date}112233_HT000004-003_${claimObject.icn}.837P`);

/* claimObject ref({
    icn: {
        label: 'ICN',
        value: ''
    }
})
*/

const finished = computed(() => {
    if(claimObject.value.icn.length
        && claimObject.value.lastName.length
        && claimObject.value.firstName.length
        && claimObject.value.memberId.length
        && claimObject.value.birthdate.length
        && claimObject.value.gender.length
        && claimObject.value.totalAmount.length
        && claimObject.value.diagnosis.length
        && claimObject.value.procedure.length
        && claimObject.value.lineAmount.length
        && claimObject.value.serviceDate.length
    ) return true
    else return false;
});

const mcos = {
    selectHealth: {
        programs: {
            mmed: '200000803'
        },
        tpn: 'HT000015-300'
    }
}

const template = 
computed(() => {
return `ISA|00|          |00|          |ZZ|HT000015-300   |ZZ|HT000004-003   |250904|1321|^|00501|${claimObject.value.icn}|1|T|:
GS|HC|HT000015-300|HT000004-003|20250904|1321|${claimObject.value.icn}|X|005010X222A1
ST|837|${claimObject.value.icn}|005010X222A1
BHT|0019|00|${claimObject.value.icn}|20250904|131805|RP
NM1|41|2|SelectHealth|||||46|HT000015-300
PER|IC|SelectHealth EDI|TE|8014425442|EM|edi@selecthealth.org
NM1|40|2|Utah Medicaid - MCO|||||46|HT000004-003
HL|1||20|1
NM1|85|2|BILLING PROVIDER|||||XX|1992835268
N3|11520 S REDWOOD RD
N4|SOUTH JORDAN|UT|840957805
REF|EI|942854057
PER|IC|BILLING PROVIDER|TE|3858876000
HL|2|1|22|0
SBR|P|18|200000803||||||MC
NM1|IL|1|${claimObject.value.lastName}|${claimObject.value.firstName}||||MI|${claimObject.value.memberId}
N3|1111 STREET
N4|MIDVALE|UT|84070
DMG|D8|${claimObject.value.birthdate}|${claimObject.value.gender}
NM1|PR|2|SELECTHEALTH COMM CARE|||||PI|200000803
CLM|${claimObject.value.icn}|${claimObject.value.totalAmount}|||11:B:1|Y|A|Y|Y
HI|ABK:${claimObject.value.diagnosis}
HCP|02|${claimObject.value.totalAmount}
NM1|82|1|COYLE|LAUREN|L|||XX|1780027821
SBR|P|18|200000803||||||MC
AMT|D|${claimObject.value.totalAmount}
OI|||Y|P||Y
NM1|IL|1|NAME|NAME|M|||MI|206902744
N3|222 ADDRESS
N4|WEST VALLEY CITY|UT|84120
NM1|PR|2|MCO HEALTH CARE OF UTAH|||||PI|200000803
LX|1
SV1|HC:${claimObject.value.procedure}|${claimObject.value.totalAmount}|UN|1|||1
DTP|472|D8|${claimObject.value.serviceDate}
SE|33|${claimObject.value.icn}
GE|1|${claimObject.value.icn}
IEA|1|${claimObject.value.icn}`
});

export default function useClaim () {
    return {
        finished,
        claimObject,
        template,
        filename,
    };
}