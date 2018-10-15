describe("Test name input", () => {
    const parameters = [
        {description: "Juan shoul be valid", arg:"Juan", expect: true},
        {description: "Margarita Rita Nica shoul be invalid", arg:"Margarita Rita Nica", expect: false},
        {description: "168Abul shoul be invalid", arg:"168Abul", expect: false}
    ];
    parameters.forEach((param) => {
        it(param.description, () => {
        const expectValue = param.expect;
        const result = regExpService.isValidName(param.arg);
        expect(result).toBe(expectValue);
        });
    });
});

describe("Test surname input", () => {
    const parameters = [
        {description: "Torres surname should be valid", arg:"Torres", expect: true},
        {description: "Torres Gomez should be valid", arg:"Torres Gomez", expect: true},
        {description: "Tor5es should be invalid", arg:"Tor5es", expect: false}
    ];
    parameters.forEach((param) => {
        it(param.description, () => {
        const expectValue = param.expect;
        const result = regExpService.isValidSurname(param.arg);
        expect(result).toBe(expectValue);
        });
    });
});

describe("Test email input", () => {
    const parameters = [
        {description: "pable123@gmail.com should be valid", arg:"pable123@gmail.com", expect: true},
        {description: "Helena should be invalid", arg:"Helena", expect: false},
        {description: "faladel 3@loles,com should be invalid", arg:"faladel 3@loles,com", expect: false}
    ];
    parameters.forEach((param) => {
        it(param.description, () => {
        const expectValue = param.expect;
        const result = regExpService.isValidEmail(param.arg);
        expect(result).toBe(expectValue);
        });
    });
});

describe("Test age input", () => {
    const parameters = [
        {description: "16 should be valid", arg:"16", expect: true},
        {description: "246 should be invalid", arg:"246", expect: false},
        {description: "-16 should be invalid", arg:"-16", expect: false},
        {description: "diecisiete should be invalid", arg:"diecisiete", expect: false},
        {description: "+++- should be invalid", arg:"+++-", expect: false},
        {description: "324fsf6 should be invalid", arg:"324fsf6", expect: false}
    ];
    parameters.forEach((param) => {
        it(param.description, () => {
        const expectValue = param.expect;
        const result = regExpService.isValidAge(param.arg);
        expect(result).toBe(expectValue);
        });
    });
});

describe("Test post-code input", () => {
    const parameters = [
        {description: "29006 in Spain should be valid", args:{cospost: "29006", country: "Spain"}, expect: true},
        {description: "546246 in Spain should be invalid", args:{cospost: "546246", country: "Spain"}, expect: false},
        {description: "2 in Spain should be invalid", args:{cospost: "2", country: "Spain"}, expect: false},
        {description: "dsd in Spain should be invalid", args:{cospost: "dsd", country: "Spain"}, expect: false},
        {description: "29006 in Usa should be valid", args:{cospost: "29006", country: "Usa"}, expect: true},
        {description: "2 in Usa should be valid", args:{cospost: "2", country: "Usa"}, expect: true},
        {description: "5345353 in Usa should be valid", args:{cospost: "5345353", country: "Usa"}, expect: true},
        {description: "ad in Usa should be invalid", args:{cospost: "ad", country: "Usa"}, expect: false},
    ];
    parameters.forEach((param) => {
        it(param.description, () => {
        const expectValue = param.expect;
        const result = regExpService.isValidPostcod(param.args.cospost, param.args.country);
        expect(result).toBe(expectValue);
        });
    });
});

describe("Test born-age input", () => {
    const parameters = [
        {description: "15/07/1995 in Spain should be valid", args:{year: "15/07/1995", country: "Spain"}, expect: true},
        {description: "12/14/1995 in Spain should be invalid", args:{year: "12/14/1995", country: "Spain"}, expect: false},
        {description: "12/14/1995 in Usa should be invalid", args:{year: "12/14/1995", country: "Usa"}, expect: false},
        {description: "12/02/99 in Spain should be invalid", args:{year: "12/02/99", country: "Spain"}, expect: false},
        {description: "00/00/2018 in Spain should be invalid", args:{year: "00/00/2018", country: "Spain"}, expect: false},
        {description: "00/00/2018 in Usa should be invalid", args:{year: "00/00/2018", country: "Usa"}, expect: false},
        {description: "12/14/99 in Usa should be invalid", args:{year: "12/14/99", country: "Usa"}, expect: false},
    ];
    parameters.forEach((param) => {
        it(param.description, () => {
        const expectValue = param.expect;
        const result = regExpService.isValidBornage(param.args.year, param.args.country);
        expect(result).toBe(expectValue);
        });
    });
});