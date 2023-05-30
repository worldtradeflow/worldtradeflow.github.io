

function processData(tradedata, mapdata) {
  
  // console.log('ISO:\n', ISO);

  const id2Name = new Map( ISO.map((d) => [d.numeric, d.region]) );
  const id2Abbr = new Map( ISO.map((d) => [d.numeric, d.alpha3]) );
  const abbr2Id = new Map( ISO.map((d) => [d.alpha3, d.numeric]) );
  const abbr2Name = new Map( ISO.map((d) => [d.alpha3, d.region]) );
  
  console.log('codemap id2Name:\n', id2Name);
  console.log('codemap id2Abbr:\n', id2Abbr);
  console.log('codemap abbr2Id:\n', abbr2Id);

  // const abbrById = {
  //   "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT", 10: "DE", 11: "DC", 12: "FL", 13: "GA", 15: "HI", 16: "ID", 17: "IL", 18: "IN", 19: "IA", 20: "KS", 21: "KY", 22: "LA", 23: "ME", 24: "MD", 25: "MA", 26: "MI", 27: "MN", 28: "MS", 29: "MO", 30: "MT", 31: "NE", 32: "NV", 33: "NH", 34: "NJ", 35: "NM", 36: "NY", 37: "NC", 38: "ND", 39: "OH", 40: "OK", 41: "OR", 42: "PA", 44: "RI", 45: "SC", 46: "SD", 47: "TN", 48: "TX", 49: "UT", 50: "VT", 51: "VA", 53: "WA", 54: "WV", 55: "WI", 56: "WY",
  // };
  // mapdata.objects.countries.geometries.forEach(
  //   (d) => (d.properties.abbr = abbrById[d.id])
  // );
  
  // console.log('isoId2Name map', isoId2Name, isoId2Name.get('004'));
  console.log('id2Name map', id2Name.get('840'));

  // rename regions in mapdata

  let regions = new Set();
  mapdata.objects.countries.geometries.forEach((d) => {
    
    if (d.id !== undefined) {
      regions.add(d.id);   // record regions in mapdata
    }
    
    let x = String(id2Name.get(d.id));
    if (String(id2Name.get(d.id)) !== 'undefined'){
      d.properties.name = id2Name.get(d.id);
      d.properties.abbr = id2Abbr.get(d.id);
    }
      // d.properties.name = id2Name.get(d.id);
    // d.properties.abbr = id2Abbr.get(d.id);
  });

  // const name2id = new Map(
  //   mapdata.objects.countries.geometries.map((d) => [d.properties.name, d.id])
  // );
  
  // console.log("name2id:", typeof(name2id), name2id)

  console.log("trade data:", typeof(tradedata), '\n', tradedata)
  console.log("mapdata:", typeof(mapdata), '\n', mapdata)
  
  // regions.sort((a, b) => +a - +b);
  // let st = new Set(regions);

  console.log("regions in map:", '\n', regions);
  // console.log("regions in map:", '\n', st);

  // no abbr for countries!
  // // prettier-ignore
  // const abbrById = {
  //   "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT", 10: "DE", 11: "DC", 12: "FL", 13: "GA", 15: "HI", 16: "ID", 17: "IL", 18: "IN", 19: "IA", 20: "KS", 21: "KY", 22: "LA", 23: "ME", 24: "MD", 25: "MA", 26: "MI", 27: "MN", 28: "MS", 29: "MO", 30: "MT", 31: "NE", 32: "NV", 33: "NH", 34: "NJ", 35: "NM", 36: "NY", 37: "NC", 38: "ND", 39: "OH", 40: "OK", 41: "OR", 42: "PA", 44: "RI", 45: "SC", 46: "SD", 47: "TN", 48: "TX", 49: "UT", 50: "VT", 51: "VA", 53: "WA", 54: "WV", 55: "WI", 56: "WY",
  // };
  // mapdata.objects.countries.geometries.forEach(
  //   (d) => (d.properties.abbr = abbrById[d.id])
  // );


  // console.log(mapdata.objects.countries.geometries);
  
  // // // remove regions
  // var toremove = ["Antarctica"];
  // mapdata.objects.countries.geometries = mapdata.objects.countries.geometries.filter( function (d, i) { 
  //     return toremove.indexOf(d.properties.name) < 0 ;
  //   });
  
  
  // console.log(mapdata.objects.countries.geometries)
  
  const links = [];
  tradedata.forEach((d) => {
    const target = d.name;
    Object.keys(d)
      .filter((key) => key !== "name")
      .forEach((source) => {
        const value = d[source];
        
        const source_id = abbr2Id.get(source);
        const target_id = abbr2Id.get(target);

        if (source_id !== undefined && target_id !== undefined 
            && regions.has(source_id) && regions.has(target_id)
            && source_id !== target_id && +value > 0){

          links.push({
            // source: name2id.get(source),
            // target: name2id.get(target),
            source: source_id,
            target: target_id,
            value: +value,
          });
        }
      });
  });
  
  console.log("links:", links)

  const inbounds = d3.group(links, (d) => d.target);
  const outbounds = d3.group(links, (d) => d.source);
  
  console.log("inbounds:", typeof(inbounds), inbounds)
  console.log("outbounds:", typeof(outbounds), outbounds)

  // console.log(inbounds
  //               .get('156')
  //               .sort((a, b) => d3.descending(a.value, b.value)))
  // console.log(outbounds
  //               .get('156')
  //               .sort((a, b) => d3.descending(a.value, b.value)))
  
  // console.log('test :\n', abbr2Id.get(tradedata[0].name));
  // console.log('test :\n', abbr2Id.get(tradedata[1].name));

  // console.log('test node 533:\n', inbounds.get('533'));
  // console.log('test node 533:\n', outbounds.get('533'));
  // console.log('test node 004:\n', inbounds.get('004'));
  // console.log('test node 004:\n', outbounds.get('004'));
  
  const nodes = [];
  tradedata.forEach((d) => {
    
    const id = abbr2Id.get(d.name);
    const name = abbr2Name.get(d.name);
    const abbr = d.name;
    const involumes = inbounds.get(id);
    const outvolumes = outbounds.get(id);
    
    if (id != undefined && regions.has(id)) {  // nodes in the mapdata
      // console.log('node:\n', id, name, abbr);
      let node = {
        id,
        name,
        abbr,
        inbounds: (involumes !== undefined) ? involumes.sort((a, b) => d3.descending(a.value, b.value)) : [],
        inboundsTotal: (involumes !== undefined) ? d3.sum(involumes, (d) => d.value) : 0,
        outbounds: (outvolumes !== undefined) ? outvolumes.sort((a, b) => d3.descending(a.value, b.value)) : [],
        outboundsTotal: (outvolumes !== undefined) ? d3.sum(outvolumes, (d) => d.value) : 0,
      };
      // console.log('node:\n', node);
      // return node;
      
      // if (involumes != undefined) {
      //   const sorted_involumes = ;
      //   const inboundsTotal = ;
      // }
      
      nodes.push(node);

      // nodes.push({
      //   id: id,
      //   name: name,
      //   abbr: abbr,
      //   inbounds: ,
      //   inboundsTotal: ,
      // });

    }
    //  else {
    //   console.log('node novalue:\n', id);
    // }
  });


  // const nodes = tradedata.map((d) => {
  //   const id = abbr2Id.get(d.name);
  //   const name = abbr2Name.get(d.name);
  //   const abbr = d.name;
  //   const involumes = inbounds.get(id);
  //   const outvolumes = outbounds.get(id);
    
  //   if (id != undefined) {
  //     // console.log('node:\n', id, name, abbr);
  //     let x = {
  //       id,
  //       name,
  //       abbr,
  //       inbounds: (involumes != undefined) ? involumes.sort((a, b) => d3.descending(a.value, b.value)) : [],
  //       inboundsTotal: d3.sum(inbounds.get(id), (d) => d.value),
  //       outbounds: (outvolumes != undefined) ? outvolumes.sort((a, b) => d3.descending(a.value, b.value)) : [],
  //       outboundsTotal: d3.sum(outbounds.get(id), (d) => d.value),
  //     };
  //     // console.log('node:\n', x);
  //     return x;
  //   } else {
  //     console.log('node novalue:\n', id);
  //   }
  // });

  console.log("nodes:", nodes)
  console.log("links:", links)
  
  // note: besureto remove nodes and links that are not shown in mapdata

  return { nodes, links };
}


// export default processData;

