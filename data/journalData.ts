import { Journal } from '../types';

export const JOURNAL_CATEGORIES = ['All', 'Culture', 'History', 'Education', 'Trend', 'Techniques', 'People'];

export const JOURNALS: Journal[] = [
  {
    id: '1',
    title: 'The Third Wave Coffee Revolution',
    excerpt: 'From commodity to craft – how specialty coffee transformed from a morning necessity into an artisanal experience.',
    date: 'October 12, 2024',
    category: 'Culture',
    imageUrl: '/images/journal/coffee-culture.jpg',
    author: 'Isabella Moretti',
    readTime: '8 min read',
    content: [
      'The way we drink coffee has fundamentally changed. What was once a simple caffeine delivery system has evolved into one of the most sophisticated culinary movements of our time. Welcome to the third wave of coffee.',
      'The first wave brought coffee to the masses – instant coffee and percolators made it accessible to every household. The second wave, led by Starbucks and similar chains, introduced espresso drinks and the coffeehouse culture to mainstream America. But the third wave? It treats coffee as an artisanal product, like wine.',
      'Walk into any third wave coffee shop today, and you\'ll find baristas who can tell you exactly where your beans were grown, at what altitude, and how they were processed. Single-origin beans have replaced generic blends. Pour-over methods have supplanted drip machines. The focus has shifted from convenience to craft.',
      'The movement began in the early 2000s with pioneers like Intelligentsia, Stumptown, and Counter Culture. These roasters developed direct relationships with farmers, paying premium prices for exceptional beans. They introduced the concept of terroir to coffee – the idea that soil, climate, and processing profoundly affect flavor.',
      'Brewing methods have become equally important. The V60 pour-over, Chemex, AeroPress, and siphon brewers each extract different flavor profiles from the same beans. Water temperature, grind size, and extraction time are calibrated with scientific precision. A barista championship might be won or lost on seconds of contact time.',
      'The roasting philosophy has shifted dramatically. While second wave roasters favored dark roasts that masked bean quality with caramelization, third wave roasters prefer lighter roasts that showcase each origin\'s unique characteristics. You can now taste the blueberry notes of Ethiopian Yirgacheffe or the chocolate undertones of Colombian beans.',
      'This revolution extends beyond the coffee shop. Home brewing equipment has become increasingly sophisticated. Specialty grinders, precision kettles, and digital scales are now common in enthusiast kitchens. YouTube channels and online courses teach proper technique to millions.',
      'The impact on coffee-growing communities has been profound. Fair trade and direct trade practices ensure farmers receive fair compensation. Some roasters even invest in farming communities, building schools and infrastructure. The supply chain has become more transparent and ethical.',
      'Critics argue that third wave coffee has become pretentious and inaccessible. A $7 pour-over isn\'t affordable for everyone. But the movement has undeniably elevated coffee culture, inspiring appreciation for craftsmanship and sustainability. Whether you\'re a casual drinker or a devoted enthusiast, the third wave has transformed how we think about our daily cup.'
    ],
    tags: ['Coffee', 'Culture', 'Third Wave', 'Specialty']
  },
  {
    id: '2',
    title: 'Tea Ceremony: East Meets West',
    excerpt: 'Exploring the meditative traditions of Japanese, Chinese, and British tea ceremonies and their modern adaptations.',
    date: 'October 08, 2024',
    category: 'Education',
    imageUrl: '/images/journal/tea-ceremony.jpg',
    author: 'Dr. Marcus Chen',
    readTime: '10 min read',
    content: [
      'Tea is the world\'s most consumed beverage after water, yet few understand the rich ceremonies that have developed around its preparation. From the Zen simplicity of Japanese chanoyu to the elegance of British afternoon tea, each culture has created meaningful rituals around this simple leaf.',
      'The Japanese tea ceremony, known as chanoyu or sadō, is perhaps the most formalized. Developed in the 15th century under the influence of Zen Buddhism, it transforms tea preparation into a spiritual practice. Every gesture is prescribed – how to enter the tea room, how to hold the bowl, how to whisk the matcha.',
      'The philosophy of wabi-sabi permeates the ceremony. This aesthetic embraces imperfection and transience. Tea bowls may be deliberately irregular. Flowers are arranged simply. The goal isn\'t perfection but presence – complete attention to the moment of making and sharing tea.',
      'Chinese gongfu tea ceremonies take a different approach. Rather than a spiritual practice, gongfu emphasizes the art of brewing – using multiple short infusions to extract the full complexity of oolong and pu-erh teas. The small clay teapots, seasoned over years of use, become as prized as the tea itself.',
      'The British afternoon tea tradition, established in the 1840s, reflects different values – social connection and refined hospitality. The full tea service with finger sandwiches, scones, and pastries became a marker of status and civility. The ritual of "taking tea" structured social interaction in upper-class British society.',
      'Modern adaptations are emerging worldwide. In Morocco, mint tea ceremonies cement social bonds and demonstrate hospitality. In Taiwan, bubble tea shops create community gathering spaces for younger generations. Each culture makes tea their own.',
      'Contemporary tea culture in the West has embraced elements from multiple traditions. Specialty tea shops offer guided tastings reminiscent of wine experiences. Meditation centers incorporate tea ceremony as mindfulness practice. Home enthusiasts invest in gaiwans and Japanese ceramics.',
      'The health benefits of tea have driven renewed interest. Green tea\'s antioxidants, matcha\'s focus-enhancing properties, and herbal teas\' calming effects appeal to wellness-minded consumers. Science is validating what traditional cultures have known for millennia.',
      'Whether you steep a bag in your morning mug or practice formal ceremony, tea invites a pause in our hurried lives. The simple act of waiting for water to heat, of watching leaves unfurl, of holding a warm cup – these moments of attention are the true ceremony. Every cup is an opportunity for presence.'
    ],
    tags: ['Tea', 'Ceremony', 'Culture', 'Mindfulness']
  },
  {
    id: '3',
    title: 'Natural Wine: Beyond the Hype',
    excerpt: 'Understanding the philosophy, production methods, and controversial aspects of the natural wine movement.',
    date: 'September 29, 2024',
    category: 'Trend',
    imageUrl: '/images/journal/natural-wine.jpg',
    author: 'Emma Rodriguez',
    readTime: '7 min read',
    content: [
      'Natural wine has become the most divisive topic in wine culture. Devotees praise its authenticity and connection to terroir. Critics dismiss it as flawed or just marketing. The truth, as always, lies somewhere in between.',
      'What exactly is natural wine? While there\'s no legal definition, most agree on the basics: organically or biodynamically farmed grapes, hand-harvested, fermented with native yeasts, and bottled with minimal or no added sulfites. No commercial yeasts, enzymes, or processing aids allowed.',
      'The philosophy extends beyond technique. Natural winemakers see themselves as farmers first, guiding rather than manufacturing. They accept variation between vintages as a feature, not a bug. Each bottle reflects its specific time and place – the weather that year, the particular vineyard\'s character.',
      'The movement emerged in France in the 1980s and 90s, led by vignerons like Marcel Lapierre and Pierre Overnoy. They were rebelling against industrialized winemaking – the additives, the manipulation, the homogenization. They wanted wine that tasted like somewhere, not everywhere.',
      'The flavors can be surprising. Without intervention, wines may be cloudy, funky, or slightly effervescent. Aromas might include barnyard, cider, or kombucha notes alongside fruit. Some find these characteristics exciting and authentic. Others find them flawed.',
      'The controversy centers on consistency and quality. Conventional winemakers argue that some "faults" in natural wines are simply poor winemaking dressed up as philosophy. Natural wine advocates counter that conventional wines are over-processed and stripped of character.',
      'The health angle drives some consumers. Lower sulfites appeal to those who believe they\'re sulfite-sensitive (though true sulfite allergies are rare). The absence of synthetic pesticides matters to environmentally conscious drinkers. The farming practices benefit soil health and biodiversity.',
      'Finding good natural wine requires trust – in the shop owner, the importer, the winemaker. Unlike conventional wine, which aims for consistency, natural wine varies dramatically. A producer you love might make a bottle you hate. This unpredictability delights some and frustrates others.',
      'Beyond the debate, natural wine has undeniably influenced mainstream winemaking. More producers are reducing interventions. Organic and sustainable practices are spreading. Even if you never drink a funky orange wine, the movement has pushed the entire industry toward more thoughtful production.',
      'The best advice? Try it with an open mind. Visit a natural wine bar and let the sommelier guide you. You might discover flavors you never knew wine could possess. Or you might confirm that conventional wine is more your style. Either way, you\'ll understand what the fuss is about.'
    ],
    tags: ['Wine', 'Natural Wine', 'Organic', 'Trends']
  },
  {
    id: '4',
    title: 'The History of Beer Brewing',
    excerpt: 'Tracing the 10,000-year journey from ancient Sumerian brewers to modern craft beer innovation.',
    date: 'September 15, 2024',
    category: 'History',
    imageUrl: '/images/journal/beer-history.jpg',
    author: 'Thomas Beaumont',
    readTime: '12 min read',
    content: [
      'Beer is one of humanity\'s oldest prepared beverages, with evidence of brewing dating back to at least 5,000 BCE in Mesopotamia. Some archaeologists believe fermented grain drinks may have been made as early as 10,000 BCE, possibly predating bread as a use for cultivated grains.',
      'The ancient Sumerians left the oldest written records of brewing – clay tablets with hymns to Ninkasi, the goddess of beer, that double as brewing recipes. Their beer was thick, nutritious, and sipped through reeds to filter out grain particles. It was safer than water and provided essential calories.',
      'Egyptian brewing became more sophisticated. Workers building the pyramids received beer as part of their wages – about four liters daily. Different styles existed for different social classes, from everyday table beer to premium offerings for royalty. Brewing was often the domain of women.',
      'Medieval European monasteries preserved and advanced brewing knowledge through the Dark Ages. Monks brewed for sustenance during fasting periods, for sale to travelers, and for their own consumption. They introduced hops as a preservative and flavoring, transforming beer\'s character.',
      'The German Reinheitsgebot of 1516 – the famous beer purity law – restricted ingredients to water, barley, and hops (yeast\'s role was not yet understood). This regulation standardized brewing and protected consumers, though it also limited innovation for centuries.',
      'The Industrial Revolution transformed brewing. Refrigeration enabled year-round production. Pasteurization extended shelf life. Industrial malting provided consistent ingredients. Large breweries emerged, consolidating an industry of small producers. By the mid-20th century, a few giants dominated global beer production.',
      'The craft beer revolution began in the 1970s and 80s, first in Britain with the Campaign for Real Ale, then explosively in America. Homebrewers went professional. Forgotten styles were revived. Innovation flourished. The number of American breweries grew from fewer than 100 in 1980 to over 9,000 today.',
      'Modern craft brewing has resurrected nearly every historical style while creating new ones. New England IPAs, pastry stouts, and sour ales would puzzle traditional brewers. Yet ancient techniques also thrive – farmhouse ales, spontaneously fermented lambics, and wood-aged beers connect us to brewing\'s past.',
      'The globalization of beer culture continues. Craft brewing has spread to every continent. Japanese, Australian, and Scandinavian brewers compete in international competitions. What was once a local product has become a global craft, yet the best beers still reflect their place of origin.',
      'From Sumerian priestesses to Brooklyn hipster brewers, the fundamental process remains the same: grain, water, and fermentation create something greater than its parts. Every glass of beer connects us to ten millennia of human ingenuity and shared celebration. Here\'s to the next ten thousand years.'
    ],
    tags: ['Beer', 'History', 'Craft Beer', 'Brewing']
  },
  {
    id: '5',
    title: 'The Art of Coffee Cupping',
    excerpt: 'How professional cuppers evaluate coffee quality and how you can develop your palate at home.',
    date: 'September 01, 2024',
    category: 'Techniques',
    imageUrl: '/images/journal/coffee-cupping.jpg',
    author: 'James Mitchell',
    readTime: '9 min read',
    content: [
      'Cupping is the coffee industry\'s systematic method for evaluating aroma, flavor, and quality. Professional cuppers taste hundreds of samples to source exceptional beans. But cupping isn\'t just for professionals – it\'s a skill anyone can develop to deepen their appreciation of coffee.',
      'The protocol is precisely standardized. Coarsely ground coffee is placed in cupping bowls at a specific ratio (usually 8.25 grams per 150ml water). Hot water is poured directly onto the grounds, creating a crust. After four minutes, cuppers break the crust with a spoon, releasing aromas.',
      'The first evaluation is purely olfactory. As you break the crust, lean in and inhale deeply. Note the fragrance: is it fruity, floral, nutty, chocolatey? Does it remind you of anything specific? Write down immediate impressions before they fade.',
      'After skimming the grounds, slurping begins. Professional cuppers use special spoons to aspirate the coffee forcefully, spraying it across the palate. This aeration helps volatiles reach the nasal passages, where most flavor perception occurs. The sound is ungraceful but effective.',
      'Cuppers evaluate multiple attributes: aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall score. Each is rated on a detailed scale. The Specialty Coffee Association protocol provides the industry standard, scoring coffees on a 100-point scale.',
      'Acidity is particularly important – not sourness, but the brightness and liveliness on the palate. Great acidity is often described as citrus-like or wine-like. Body refers to texture: is the coffee thin and tea-like, or thick and syrupy? Balance considers how all elements harmonize.',
      'The flavor wheel is an essential cupping tool. Developed by World Coffee Research and the SCA, it provides a common vocabulary for describing flavors. Starting from the center (sweet, sour, bitter), it branches into specific descriptors like "black tea" or "blueberry."',
      'For home cupping, you\'ll need: cupping bowls (or small cups), a cupping spoon, a kettle, a scale, a grinder, and several coffee samples. Heat water to 200°F, use 8.25g of coffee per bowl, and follow the four-minute steep time. Compare different origins side by side.',
      'Developing your palate takes practice. Start by identifying broad categories: is this fruity or nutty? Acidic or smooth? Over time, you\'ll discern specific fruits, pinpoint roast levels, and detect subtle processing characteristics. Keep tasting notes to track your progress.',
      'Cupping connects you to a global community of coffee professionals. Using the same methodology and vocabulary, you can compare impressions with roasters, farmers, and enthusiasts worldwide. Your evaluation of a Kenyan coffee uses the same language as a cupper in Nairobi. This shared practice makes coffee culture truly international.'
    ],
    tags: ['Coffee', 'Cupping', 'Tasting', 'Education']
  },
  {
    id: '6',
    title: 'Behind the Counter with Maria Santos',
    excerpt: 'Meet the champion barista who\'s redefining what coffee can be through precision and passion.',
    date: 'August 20, 2024',
    category: 'People',
    imageUrl: '/images/journal/barista.jpg',
    author: 'Rebecca Santos',
    readTime: '11 min read',
    content: [
      'Maria Santos doesn\'t make coffee – she crafts experiences. As a two-time national barista champion and head roaster at Portland\'s acclaimed Ritual Coffee, she\'s earned recognition for pushing the boundaries of what specialty coffee can be. Her approach combines scientific precision with genuine warmth.',
      '"Coffee is chemistry," Maria explains, adjusting the grind on her EK43. "But it\'s also hospitality. The perfect extraction means nothing if you can\'t connect with the person drinking it. Every cup is a conversation."',
      'Her signature drink, which won her the national title, exemplifies this philosophy: a deconstructed cortado featuring a Gesha varietal she personally sourced from Panama, paired with a caramelized milk foam and a spice-infused water that echoes the coffee\'s floral notes.',
      'Maria\'s journey to coffee wasn\'t direct. She studied chemistry at UC Berkeley, planning a career in pharmaceutical research. A part-time job at a campus coffee shop changed everything. "I fell in love with the science of extraction," she recalls. "And the people. The community."',
      'She trained under some of the industry\'s best, eventually managing quality control at a major roastery before striking out on her own. Ritual Coffee launched five years ago in a converted garage. Now it supplies beans to 50 cafés and ships worldwide.',
      'What sets Maria apart is her commitment to origin. She spends three months each year visiting farms in Colombia, Ethiopia, and Indonesia. These aren\'t brief sourcing trips – she works alongside farmers, learning their challenges and building lasting relationships.',
      '"You can\'t truly understand coffee without understanding where it comes from," she says, showing photos of Yirgacheffe coffee farmers she\'s worked with for years. "These relationships make me a better roaster. I\'m not just buying a commodity – I\'m partnering with craftspeople."',
      'She\'s equally passionate about education. Ritual offers free community classes on brewing basics. Her YouTube channel has over 100,000 subscribers learning proper technique. She mentors young baristas, particularly women and people of color in an industry that has historically lacked diversity.',
      '"The best coffee shops create community," Maria reflects. "Not just caffeine delivery. When someone comes in stressed and leaves calm, connected, a little happier – that\'s what this is about. The craft is in service of something larger."',
      'During our conversation, she makes me a pour-over of a new Rwandan lot she\'s excited about. The precision is remarkable – timed pours, measured temperatures – but so is the care. She watches my first sip, curious about my reaction, ready to discuss the experience.',
      '"This is what I love," Maria says, as we taste the bright, tea-like coffee together. "Sharing discovery. Connecting people to farmers they\'ll never meet, to places they\'ll never go, through flavor. Every cup tells a story."'
    ],
    tags: ['Coffee', 'Barista', 'Profile', 'Specialty']
  },
  {
    id: '7',
    title: 'Understanding Wine Terroir',
    excerpt: 'Why the same grape tastes different in Burgundy than Napa – the science and poetry of place.',
    date: 'August 05, 2024',
    category: 'Education',
    imageUrl: '/images/journal/wine-terroir.jpg',
    author: 'Giovanni Rossi',
    readTime: '10 min read',
    content: [
      'Terroir – the French term has no direct English translation, yet it\'s central to understanding wine. It encompasses the complete natural environment in which a wine is produced: soil, climate, topography, and the indefinable essence of place that great wines capture.',
      'The concept originated in Burgundy, where monks spent centuries mapping how different vineyard plots – sometimes just meters apart – produced distinctly different wines. They called these plots "climats" and classified them by quality. Many of their classifications still define Burgundy\'s best vineyards.',
      'Soil is perhaps the most discussed element. Burgundy\'s limestone gives Pinot Noir its characteristic minerality. Volcanic soils in Santorini produce distinctively saline wines. The gravel of Bordeaux\'s Médoc ensures excellent drainage. Yet soil science alone can\'t explain terroir\'s complexity.',
      'Climate shapes the grape profoundly. Cool climates produce higher acidity and more delicate flavors. Warm climates yield riper, fuller wines. Diurnal temperature variation – the difference between day and night temperatures – helps grapes develop complexity while retaining freshness.',
      'Microclimate matters as much as regional climate. A south-facing slope receives more sunlight than a north-facing one. Proximity to water moderates temperature extremes. Altitude affects both temperature and UV exposure. Each vineyard has its own specific conditions.',
      'The human element is sometimes included in terroir – the traditions and techniques passed down through generations. A winemaking family\'s choices, informed by decades of observation, shape the expression of their land. Terroir isn\'t just nature; it\'s nature understood and interpreted.',
      'Modern technology has begun to map terroir scientifically. Satellite imaging, soil sensors, and climate data help identify ideal grape varieties for specific sites. Yet the best vignerons still rely on intuition developed over lifetimes of careful observation.',
      'The taste of terroir is sometimes called "minerality" – that rocky, flinty quality in certain wines. Scientists debate whether vines actually absorb minerals from soil in ways we can taste. Perhaps minerality is partly metaphor, a way of describing wines that taste of somewhere rather than nowhere.',
      'New World winemakers increasingly embrace terroir thinking. Instead of emulating European styles, they\'re discovering what their own vineyards express best. Australian regions like the Yarra Valley and American areas like Oregon\'s Willamette Valley are developing distinct reputations.',
      'Understanding terroir transforms wine drinking from consumption to contemplation. Each bottle becomes a window into a specific place and time – this vineyard, this season, these decisions. The wine in your glass connects you to somewhere particular, expressing what that place alone can create.',
      'As you taste, ask yourself: could this wine have been made anywhere else? The greatest terroir-driven wines answer no. They are irreplaceable expressions of their origins, capturing in liquid form something true about a singular spot on Earth.'
    ],
    tags: ['Wine', 'Terroir', 'Education', 'Viticulture']
  },
  {
    id: '8',
    title: 'Sustainable Tea Farming',
    excerpt: 'How conscious cultivation practices are reshaping tea production while preserving tradition.',
    date: 'July 22, 2024',
    category: 'Trend',
    imageUrl: '/images/journal/sustainable-tea.jpg',
    author: 'Alex Green',
    readTime: '8 min read',
    content: [
      'The tea industry faces a sustainability crisis. Chemical-intensive farming has depleted soils. Climate change threatens traditional growing regions. Worker welfare often goes unaddressed. But across the tea-growing world, producers are pioneering more sustainable approaches.',
      'Organic certification has grown rapidly. Major tea regions in India, China, and Sri Lanka now have certified organic estates producing high-quality leaves without synthetic pesticides or fertilizers. Consumer demand is driving conversion even in traditionally conventional operations.',
      'Biodynamic farming goes further, treating the tea garden as a self-sustaining ecosystem. Preparations made from herbs, minerals, and manures are applied at specific astronomical times. While the science is debated, biodynamic estates often produce exceptionally terroir-expressive teas.',
      'Regenerative agriculture focuses on soil health. Cover cropping, reduced tillage, and composting rebuild organic matter depleted by decades of intensive cultivation. Healthy soils require less irrigation, sequester carbon, and produce more resilient plants.',
      'Agroforestry integrates tea plants with other trees and crops. Shade trees provide habitat for birds that control pests. Fruit trees offer farmers additional income. The diversity creates resilience against climate and market shocks. Some estates are returning to pre-industrial polyculture models.',
      'Water management has become critical as droughts increase. Efficient irrigation, rainwater harvesting, and watershed protection help estates adapt to changing rainfall patterns. Some forward-thinking producers are mapping water risks decades into the future.',
      'Social sustainability matters equally. Fair trade certification ensures minimum prices and community development premiums. Some estates provide housing, healthcare, and education for workers and families. Women\'s empowerment programs address historic inequities in the workforce.',
      'Carbon neutrality is emerging as a goal. Tea gardens can be net carbon sinks when managed well. Some producers now track and offset their emissions, from cultivation through shipping. Carbon labeling may soon become common on tea packaging.',
      'Traditional wisdom is being preserved alongside innovation. Indigenous farming practices often embedded sustainability principles long before the term existed. Documenting and applying this knowledge helps contemporary producers learn from the past.',
      'Consumer choices drive change. Seeking out certified sustainable teas, supporting transparent supply chains, and accepting the higher prices quality production requires – these individual decisions accumulate into industry transformation.',
      'The cup of tea in your hands connects you to these issues. By understanding and supporting sustainable production, you participate in shaping tea\'s future. The ancient beverage can thrive for millennia more, but only if we cultivate it thoughtfully.'
    ],
    tags: ['Tea', 'Sustainability', 'Organic', 'Farming']
  },
  {
    id: '9',
    title: 'The Global Rise of Craft Beer',
    excerpt: 'How a movement born in American garages conquered the world\'s beer markets.',
    date: 'July 08, 2024',
    category: 'History',
    imageUrl: '/images/journal/craft-beer.jpg',
    author: 'Charlotte Adams',
    readTime: '9 min read',
    content: [
      'In 1980, the United States had fewer than 100 breweries. Most produced nearly identical light lagers. Today, over 9,000 craft breweries operate nationwide, creating everything from Belgian-style saisons to barrel-aged imperial stouts. This revolution has spread globally.',
      'The movement began with homebrewers. President Carter\'s 1978 legalization of home brewing unleashed experimentation. Enthusiasts rediscovered historic styles, imported ingredients, and pushed boundaries. Some, like Ken Grossman of Sierra Nevada and Jim Koch of Boston Beer, went professional.',
      'Sierra Nevada Pale Ale, launched in 1980, exemplified the new approach: intensely hoppy, full-flavored, distinct from any industrial lager. It proved that American beer drinkers would embrace bold flavors. The West Coast IPA style it helped pioneer became craft beer\'s signature.',
      'The 1990s saw steady growth. Regional breweries emerged in every state. Brewpubs brought fresh beer directly to consumers. Beer festivals created community around craft drinking. The Brewers Association began tracking the movement\'s growth.',
      'The 2000s brought acceleration. Sam Calagione\'s Dogfish Head pioneered extreme beers with unusual ingredients. Russian River\'s Pliny the Elder became legendary, sparking "whale hunting" culture around limited releases. Beer geekdom flourished online.',
      'Big brewers took notice. Acquisitions began: Goose Island to Anheuser-Busch, Ballast Point to Constellation, Wicked Weed to AB InBev. Debates erupted about what "craft" means when backed by global corporations. The Brewers Association tightened its definition.',
      'The movement went global. Italy, Spain, and Scandinavia developed vibrant craft scenes. Japan\'s brewing restrictions eased, unleashing creativity. Australia, New Zealand, and Brazil produced world-class beer. Even in traditional beer countries like Germany and the UK, craft challenged convention.',
      'Style innovation accelerated. New England IPAs, with their hazy appearance and juicy flavors, emerged around 2015 and conquered the world. Pastry stouts recreated desserts in liquid form. Kettle sours provided accessible tartness. Wild fermentation found devoted followers.',
      'The industry faces challenges. Market saturation has slowed growth. Taproom-focused models struggled during pandemic closures. Ingredient costs have risen. Yet new breweries continue opening, and consumer interest remains strong.',
      'What began as a handful of dreamers brewing in their garages has transformed global beer culture. The movement proved that flavor matters, that locality matters, that independence matters. Every pint from a craft brewery continues that revolution, one sip at a time.'
    ],
    tags: ['Beer', 'Craft Beer', 'History', 'Industry']
  }
];
