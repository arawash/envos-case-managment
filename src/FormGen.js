
function FormGen() {

  return (
    <>
{form}
</>
  );
}

export default FormGen ;







let DocketEntry = {
    additionalInfo: "string",
    addToCoversheet: true,
    caseCaption: "string",
    certificateOfService: "string",
    createdAt: "string",
    descriptionDisplay: "string",
    docketEntryId: "string",
    docketNumber: "string",
    documentTitle: "string",
    documentconst: "string",
    eventCode: "string",
    filedBy: "string",
    filingDate: "string",
    index: Number,
    isFileAttached: true,
    isPaper: "string",
    lodged: true,
    mailingDate: "string",
    otherFilingParty: "string",
    editState: {
        object: "object"
    },
    isLegacyServed: true,
    processingStatus: "string",
    pk: "string",
    receivedAt: "string",
    sentBy: "string",
    servedAt: "string",
    sk: "string",
    userId: "string"
}


let TCase = {
    associatedJudge: "string",
    automaticBlocked: "string",
    automaticBlockedDate: "string",
    automaticBlockedReason: "string",
    blocked: "string",
    isSealed: true,
    blockedDate: "string",
    blockedReason: "string",
    docketEntries: {
        additionalInfo: "string",
        addToCoversheet: true,
        caseCaption: "string",
        certificateOfService: "string",
        createdAt: "string",
        descriptionDisplay: "string",
        docketEntryId: "string",
        docketNumber: "string",
        documentTitle: "string",
        documentconst: "string",
        eventCode: "string",
        filedBy: "string",
        filingDate: "string",
        index: Number,
        isFileAttached: true,
        isPaper: "string",
        lodged: true,
        mailingDate: "string",
        otherFilingParty: "string",
        editState: {
            object: "object"
        },
        isLegacyServed: true,
        processingStatus: "string",
        pk: "string",
        receivedAt: "string",
        sentBy: "string",
        servedAt: "string",
        sk: "string",
        userId: "string"
    },
    // [],
    canAllowDocumentService: "string",
    caseTitle: "string",
    canAllowPrintableDocketRecord: "string",
    caseCaption: "string",
    caseNote: "string",
    caseconst: "string",
    closedDate: "string",
    hearings: {
        trialSessionId: "string",
    },
    // l[],
    createdAt: "string",
    damages: "string",
    docketNumber: "string",
    docketNumberSuffix: "string",
    docketNumberWithSuffix: "string",
    entityName: "string",
    filingconst: "string",
    hasPendingItems: true,
    hasVerifiedIrsNotice: "string",
    highPriority: "string",
    highPriorityReason: "string",
    initialCaption: "string",
    initialDocketNumberSuffix: "string",
    irsNoticeDate: "string",
    isPaper: "string",
    judgeUserId: "string",
    leadDocketNumber: "string",
    litigationCosts: "string",
    mailingDate: "string",
    noticeOfAttachments: "string",
    noticeOfTrialDate: "string",
    orderDesignatingPlaceOfTrial: true,
    orderForAmendedPetition: true,
    orderForAmendedPetitionAndFilingFee: true,
    orderForFilingFee: true,
    orderForOds: true,
    orderForRatification: true,
    orderToShowCause: true,
    partyconst: "string",
    petitionPaymentDate: "string",
    petitionPaymentMethod: "string",
    petitionPaymentStatus: "string",
    petitionPaymentWaivedDate: "string",
    preferredTrialCity: "string",
    procedureconst: "string",
    qcCompleteForTrial: "string",
    receivedAt: "string",
    sealedDate: "string",
    sortableDocketNumber: "string",
    status: "string",
    trialDate: "string",
    trialLocation: "string",
    trialSessionId: "string",
    trialTime: "string",
    useSameAsPrimary: "string",
    //petitioners: TPetitioner,
    // [],
    isUserIdRepresentedByPrivatePractitioner: "ANY",
}
/*


function createFormFromObject(obj, legend) {
    // Create a form element
    const form = document.createElement('form');
    // If a legend was provided, create a fieldset element and append the legend
    if (legend) {}
    // Iterate through the properties of the object
    for (const prop in obj) {
        // Ignore inherited properties
        if (obj.hasOwnProperty(prop)) {
            // Create a label element
            const label = document.createElement('label');






            // If a fieldset element was created, append the label and input elements to it;
            // otherwise, append them to the form
            if (legend) {
                //feldset.appendChild(label);
                //fieldset.appendChild(input);
            } else {
                form.appendChild(document.createElement('br'))
                form.appendChild(label);
                form.appendChild(input);
            }
        }
    }
    return form;
}
const form = createFormFromObject(TCase);
document.body.appendChild(form);



    if (typeof obj[prop] === 'object') {
                const fieldset = document.createElement('fieldset');
                const legendElement = document.createElement('legend');
                legendElement.innerText = legend;
                fieldset.appendChild(legendElement);
                // If the property is an object, recursively create a form for it
                input = createFormFromObject(obj[prop], prop);
                input.setAttribute('id', prop);
                input.setAttribute('name', prop);
                form.appendChild(fieldset);
                //    feldset.appendChild(label);
                */
                
                
                
                
                function createFormFromObject(obj, legend) {
        // Create a form element
        const form = document.createElement('form');
       
       
       function iterate(obj, stack) {

    
    for (var prop in obj) {
        const label = document.createElement('label');
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] == "object") {
                iterate(obj[prop], stack)
            } else {
                
                label.setAttribute('for', prop);
                // Create an input element based on the data type of the property let input;
                if (typeof obj[prop] === 'boolean') {
                    input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                } else
                    if (typeof obj[prop] === 'number') {
                    input = document.createElement('input');
                    input.setAttribute('type', 'number');
                } else
                    if (typeof obj[prop] === 'string' && obj[prop].startsWith('Date')) {
                    input = document.createElement('input');
                    input.setAttribute('type', 'date');
                } else {
                    input = document.createElement('input');
                    input.setAttribute('type', 'text');
                }
                label.innerText = prop;
                input.setAttribute('id', prop);
                input.setAttribute('name', prop);
                //    fieldset.appendChild(input);
                 form.appendChild(label);
            form.appendChild(input);
            }
        }}
    }




 // If a legend was provided, create a fieldset element and append the legend
        //if (legend) {}
        // Iterate through the properties of the object
        iterate(obj, "      ")

        // If a fieldset element was created, append the label and input elements to it;
        // otherwise, append them to the form
        if (legend) {
            //feldset.appendChild(label);
            //fieldset.appendChild(input);
        } else {
            form.appendChild(document.createElement('br'))
           
           
        }
        return form;
    }
    
    
    

    
    const form = createFormFromObject(TCase);
    document.body.appendChild(form);






