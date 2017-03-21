export function fCreateActionsAsync(aType,fCreateAction){
    const oResult = {};
    aType.forEach(item => {
        oResult[item + 'Start'] = fCreateAction(item + '.start');
        oResult[item + 'Ok'] = fCreateAction(item + '.ok');
        oResult[item + 'Error'] = fCreateAction(item + '.error');
    });
    return oResult;
}