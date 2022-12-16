import React from 'react'
import ContributorForm from '../../components/Forms/ContributorForm'
import { ContributorFormSchema } from '../../utils/formSchemas'

export default function ContributorCatalogingPage() {

    const defaultContributorValues = {
        name: '',
        description: '',

        largeImage: '',
        smallImage: '',

        privacy: false,

        nationalityEthnicity: [],

        raceCulture: {

            afroLatino: false,
    
            asian: false,
            centralAsian: false,
            eastAsian: false,
            southAsian: false,
            southeastAsian: false,
    
            blackAfrican: false,
            afroCaribbean: false,
            centralAfrican: false,
            eastAfrican: false,
            northernAfrican: false,
            southernAfrican: false,
            westAfrican: false,
    
            indigenous: false,
            firstNations: false,
            nativeAmerican: false,
    
            jewish: false,
            latinx: false,
            middleEastern: false,
            muslim: false,
            pacificIslander: false
        },
    
        raceCultureOther: [],
    
        genderSexuality: {
            lgbtq: false,
            aromantic: false,
            asexual: false,
    
            bisexual: false,
            fluid: false,
            omnisexual: false,
            pansexual: false,
            multisexual: false,
    
            gay: false,
            intersex: false,
            lesbian: false,
            queer: false,
            questioning: false,
    
            transgender: false,
            agender: false,
            genderfluid: false,
            nonbinary: false,
            transMan: false,
            transWoman: false,
    
            twoSpirit: false
        },
    
        genderSexualityOther: [],
    
        familyStructure: {
            adopted: false,
            fosterParents: false,
            incarceratedParent: false,
            singleParent: false,
            multigenerational: false,
            raisedByRelative: false,
            twoMoms: false,
            twoDads: false,
            nonbinaryParents: false
        },
    
        familyStructureOther: [],
    
        neurodivergent: {
            anxiety: false,
            adhd: false,
            autism: false,
            bipolar: false,
            depression: false,
            dyslexia: false,
            epilepsy: false,
            nonVerbal: false,
            ocd: false,
            synesthesia: false
        },
    
        neurodivergentOther: [],
    
        body: {
            bodyCharacteristics: false,
            bodyHair: false,
            bodyType: false,
            fat: false
        },
    
        bodyOther: [],
    
        disability: {
            blind: false,
            deaf: false,
            hearingAid: false,
            missingLimb: false,
            mobilityAid: false,
            cane: false,
            prosthetic: false,
            wheelchair: false,
            serviceAnimal: false
        },
    
        disabilityOther: []
    }

    return (
        <ContributorForm 
            defaultValues={defaultContributorValues}
            schema={ContributorFormSchema}
        />
    )
}