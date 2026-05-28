const fs = require('fs');
let content = fs.readFileSync('src/components/MainLayout.jsx', 'utf8');

content = content.replace("import Section37 from './Section37';", "import Section37 from './Section37';\nimport Section38 from './Section38';\nimport Section39 from './Section39';\nimport Section40 from './Section40';");
content = content.replace("const slidesLength = 38;", "const slidesLength = 41;");
content = content.replace("<Section37 />];", "<Section37 />, <Section38 />, <Section39 />, <Section40 />];");
content = content.replace("1500, 3500, 3500, 3500];", "1500, 3500, 3500, 3500, 1500, 3800, 3800];");

fs.writeFileSync('src/components/MainLayout.jsx', content);
