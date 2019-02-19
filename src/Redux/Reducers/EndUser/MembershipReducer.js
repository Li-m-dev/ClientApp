import { GET_MEMBERSHIPTYPES, SELECT_MEMBERSHIPTYPE,GET_MEMBERSHIPPACKAGES, SELECT_MEMBERSHIPPACKAGE,ADD_MEMBERSHIPASSIGNMENT,SELECT_PAYWITHCARD } from '../../Actions/EndUser/MembershipAction';
export const reducer = (state = { membershipTypes: [], selectedMembershipType: null, membershipPackages: [],selectedmembershipPackage:null,selectedPaywithCard:true}, action) => {
    switch (action.type) {
        case GET_MEMBERSHIPTYPES:
            return {
                ...state,
                membershipTypes: action.membershipTypes
            };
        case SELECT_MEMBERSHIPTYPE:
            return {
                ...state,
                selectedMembershipType: action.selectedMembershipType
            };
        case GET_MEMBERSHIPPACKAGES:
            return {
                ...state,
                membershipPackages: action.membershipPackages
            };
        case SELECT_MEMBERSHIPPACKAGE:
            return {
                ...state,
                selectedmembershipPackage: action.selectedmembershipPackage
            };
        case ADD_MEMBERSHIPASSIGNMENT:
            return {
                ...state,
                //selectedmembershipPackage: action.selectedmembershipPackage
            }; 
        case SELECT_PAYWITHCARD:
            return {
                ...state,
                selectedPaywithCard: action.selectedPaywithCard
            };  
            default:
            return state;
    }
}
