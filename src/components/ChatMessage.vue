<template>
  <v-card class="message-container rounded-lg">
    <div v-if="username" class="username-container">
      <span>{{ username }}</span>
    </div>
    <div v-if="attachments" class="files-container">
      <div
        v-for="(file, index) in attachments"
        :key="index"
        class="file"
        @click="downloadFile(file.downloadUrl, file.name)"
      >
        <div
          v-if="file.type === 'video'"
          style="height: 100%; width: 100%"
        >
          <v-img
            class="video"
            :src="file.thumbnailUrl"
          >
            <v-icon
              color="primary"
              size="62"
              style="left: calc(50% - 31px)"
            >
              mdi-download
            </v-icon>
          </v-img>
        </div>
        <div v-if="file.type === 'voice_message'" class="voice-container">
          <v-btn fab small color="green">
            <v-icon
              color="white"
              size="32"
            >
              mdi-download
            </v-icon>
          </v-btn>
          <v-img
            :src="file.thumbnailUrl"
            class="thumbnail-container"
          />
        </div>
        <div v-if="file.type==='file'" style="display: flex; width: 100%; height: 100%">
          <div 
            :style="file.thumbnailUrl ? `background-image: url(${file.thumbnailUrl}); background-repeat: no-repeat; background-size: cover` : ''"
            class="file-img"
            @mouseenter="needFileIcon = true"
            @mouseleave="needFileIcon = false"
          >
            <v-icon
              v-if="needFileIcon"
              color="white"
              size="42"
              class="file-icon"
            >
              mdi-download
            </v-icon>
          </div>
          <span class="text" v-text="file.fileName"/>
        </div>
      </div>
    </div>
    <div v-if="imgsLinks" class="image-container">
      <v-img
        v-for="(img, index) in imgsLinks.filter((item, i) => i < 10)"
        :key="index"
        :src="img"
        style="cursor: pointer"
        @click="openImage(img)"
      />
    </div>
    <div v-if="replyMessageText" class="reply-container">
      <div class="reply-content">
        <div class="username-container">
          <span>{{ replyMessageUserName }}</span>
        </div>
        <span class="reply-message" v-text="replyMessageText"/>
      </div>
    </div>
    <div v-if="text" class="text-container">
      <span v-html="text"/>
      <div class="date-container" v-text="localDate"/>
    </div>
    <div v-else class="image-date" v-text="localDate"/>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    imgsLinks: {
      type: Array
    },
    text: {
      type: String
    },
    date: {
      type: String,
      required: true
    },
    username: {
      type: String
    },
    replyMessageText: {
      type: String
    },
    replyMessageUserName: {
      type: String
    },
    attachments: {
      type: Array
    },
  },
  data() {
    return {
      needFileIcon: false,
    }
  },
  computed: {
    localDate() {
      moment.locale('ru');
      if (moment().isSame(this.date, 'day')) return moment(this.date).format('LT');
      else return moment(this.date).format('LLL');
    }
  },
  name: "ChatMessage",
  methods: {
    openImage(img) {
      window.open(img, '_blank')
    },
    downloadFile(src, name) {
      const anchor = document.createElement('a');
      anchor.href = src;
      anchor.download = name;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  }
}

</script>

<style lang="scss" scoped>
.message-container {
  max-width: 730px;
  background-color: rgb(135, 116, 225);
  overflow: hidden;
}

.image-container {
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
}

.files-container {
  margin: 6px 10px 2px;
}

.text-container {
  margin: 7px 6px;
  font-size: 16px;
  line-height: 1.3125;
  color: white;
  word-break: break-word;
  white-space: pre-wrap;

  .date-container {
    position: relative;
    bottom: auto;
    float: right;
    color: rgba(255, 255, 255, 0.533333);
  }
}

.image-date {
  position: absolute;
  min-height: 25px;
  right: 6px;
  bottom: 4px;
  color: white;
  border-radius: 0.625rem;
  padding: 0 4px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.username-container {
  color: white;
  margin: 2px 6px;
  font-size: 14px;
}

.file {
  cursor: pointer;
  display: flex;
  overflow: hidden;
  padding-bottom: 6px;
  
  .file-img {
    display: flex;
    width: auto;
    border-radius: 4px;
    min-width: 78px;
    min-height: 78px;

    .file-icon {
      padding: 18px;
    }
  }
  
  .video {
    min-height: 100%;
    display: flex;
    align-items: center;
  }

  .text {
    overflow: hidden;
    color: white;
    font-size: 14px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    padding-left: 12px;
    align-self: center;
  }

  .icon {
    background-color: #3993fb;
    border-radius: 8px;
    padding: 6px;
    min-height: 54px;
    min-width: 54px;
  }

  .voice-icon {
    background-color: #3993fb;
    border-radius: 50%;
    padding: 6px;
  }

  .voice-container {
    display: grid;
    grid-template-columns: 55px auto;
    align-items: center;

    .thumbnail-container {
      display: flex;
      max-height: 32px;
    }
  }
}

.reply-container {
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;

  .reply-content {
    display: block;
    overflow: hidden;
    padding-left: 12px;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0.3125rem;
    bottom: 0.3125rem;
    left: 0.375rem;
    width: 4px;
    border-radius: 2px;
    background: aqua;
  }

  .reply-message {
    margin: 2px 6px;
    font-size: 14px;
    color: white;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}

</style>