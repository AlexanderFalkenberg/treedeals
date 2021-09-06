export default {
    methods: {
        transformImage(image, option) {
            if (!image) return "";
            if (!option) return "";

            let imageService = "https://img2.storyblok.com/";
            let path = image.replace("https://a.storyblok.com", "");
            return imageService + option + path;
        }
    }
};
