// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/davidhenke2.github.io/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/davidhenke2.github.io/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Open-source tools and deployments for LLMs, scientific literature, and biomarker discovery.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/davidhenke2.github.io/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Open-source code behind my research — network-informed ML, viral genomics, and LLM tooling.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/davidhenke2.github.io/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae for David M. Henke — computational biologist and biostatistician at Baylor College of Medicine.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/davidhenke2.github.io/cv/";
          },
        },{id: "nav-notes",
          title: "notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/davidhenke2.github.io/blog/";
          },
        },{id: "nav-mentoring",
          title: "mentoring",
          description: "Mentoring, peer review, and research-design advising.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/davidhenke2.github.io/teaching/";
          },
        },{id: "post-significant-and-meaningless",
        
          title: "Significant and meaningless",
        
        description: "On the gap between a p-value that clears threshold and a finding a biologist can act on — and why closing it is a modeling problem, not a statistics problem.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/davidhenke2.github.io/blog/2026/significant-and-meaningless/";
          
        },
      },{id: "post-reading-depmap-without-fooling-yourself",
        
          title: "Reading DepMap without fooling yourself",
        
        description: "Four things that quietly ruin biomarker analyses of cancer dependency screens — common essentials, lineage confounding, score scale, and the variance filter you should apply first.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/davidhenke2.github.io/blog/2026/reading-depmap-without-fooling-yourself/";
          
        },
      },{id: "post-why-the-lasso-picks-the-wrong-gene",
        
          title: "Why the LASSO picks the wrong gene",
        
        description: "Penalized regression is indifferent to which member of a correlated group it selects. Biology is not. A short note on encoding network structure into the penalty.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/davidhenke2.github.io/blog/2026/lasso-picks-the-wrong-gene/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-peek-into-coronavirus-phylogeny",
        
          title: "A Peek Into Coronavirus Phylogeny",
        
        description: "Phylogenetic reconstruction of SARS-CoV-2 spike protein sequences from Baylor College of Medicine isolates and healthcare workers.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/davidhenke2.github.io/blog/2020/coronavirus-phylogeny/";
          
        },
      },{id: "news-published-a-phylogenetic-analysis-of-sars-cov-2-spike-sequences-from-bcm-isolates-a-peek-into-coronavirus-phylogeny",
          title: 'Published a phylogenetic analysis of SARS-CoV-2 spike sequences from BCM isolates: A Peek...',
          description: "",
          section: "News",},{id: "news-new-paper-in-journal-of-infection-infant-derived-nasal-organoids-reveal-increased-rsv-susceptibility-in-early-life",
          title: 'New paper in Journal of Infection: infant-derived nasal organoids reveal increased RSV susceptibility...',
          description: "",
          section: "News",},{id: "news-bioprimelasso-published-in-npj-precision-oncology-bio-primed-machine-learning-to-enhance-discovery-of-relevant-biomarkers",
          title: 'BioPrimeLASSO published in npj Precision Oncology — Bio-primed machine learning to enhance discovery...',
          description: "",
          section: "News",},{id: "projects-preprint-digest",
          title: 'Preprint Digest',
          description: "Automated daily digest of scientific preprints powered by LLMs",
          section: "Projects",handler: () => {
              window.location.href = "/davidhenke2.github.io/projects/1_project/";
            },},{id: "projects-individual-llm-deployment",
          title: 'Individual LLM Deployment',
          description: "Open-source LLMs configured for personal or institutional deployment",
          section: "Projects",handler: () => {
              window.location.href = "/davidhenke2.github.io/projects/2_project/";
            },},{id: "projects-llm-google-colab-deployment",
          title: 'LLM Google Colab Deployment',
          description: "Deploy and run LLMs in Google Colab — GPU-accelerated, no local setup required",
          section: "Projects",handler: () => {
              window.location.href = "/davidhenke2.github.io/projects/3_project/";
            },},{id: "projects-hmpv-research",
          title: 'HMPV Research',
          description: "Bioinformatics research on Human Metapneumovirus (HMPV) using computational methods for genomic analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/davidhenke2.github.io/projects/4_project/";
            },},{id: "projects-coronavirus-phylogeny",
          title: 'Coronavirus Phylogeny',
          description: "An investigation into the SARS-CoV-2 spike protein and BCM isolate phylogeny.",
          section: "Projects",handler: () => {
              window.location.href = "/davidhenke2.github.io/projects/5_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dmhenke", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/henkedavid", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/henke_tweets", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=fCbxT2wAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
