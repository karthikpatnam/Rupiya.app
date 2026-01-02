export const createPageUrl = (pageName) => {
  const routes = {
    'Home': '/',
    'ResidueFree': '/residue-free',
    'CarbonCredits': '/carbon-credits',
    'ForFarmers': '/for-farmers',
    'ForFPOs': '/for-fpos',
    'ForBuyers': '/for-buyers',
    'ForInvestors': '/for-investors',
  };
  
  return routes[pageName] || '/';
};
