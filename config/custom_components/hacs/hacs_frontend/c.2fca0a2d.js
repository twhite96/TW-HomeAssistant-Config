import{ap as e,aq as s,ak as a,ar as r,as as u}from"./main-25487c89.js";async function i(i,o,t){const n=new e("updateLovelaceResources"),l=await s(i),c="/hacsfiles/"+o.full_name.split("/")[1],d=a({repository:o,version:t}),p=l.find(e=>e.url.includes(c));n.debug({namespace:c,url:d,exsisting:p}),p&&p.url!==d?(n.debug("Updating exsusting resource for "+c),await r(i,{url:d,resource_id:p.id,res_type:p.type})):l.map(e=>e.url).includes(d)||(n.debug(`Adding ${d} to Lovelace resources`),await u(i,{url:d,res_type:"module"}))}export{i as u};
