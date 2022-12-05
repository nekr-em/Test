<template>
  <v-card class="message-container rounded-lg">
    <div v-if="username" class="username-container">
      <span>{{ username }}</span>
    </div>
    <div class="image-container" v-if="imgsLinks">
      <v-img
          v-for="(img, index) in imgsLinks.filter((item, i) => i < 10)"
          :key="index"
          :src="img"
          @click="openImage(img)"
          style="cursor: pointer"
      />
    </div>
    <div class="reply-container" v-if="replyMessageText">
      <div class="reply-content">
        <div class="username-container">
          <span>{{ replyMessageUserName }}</span>
        </div>
        <span class="reply-message" v-text="replyMessageText"/>
      </div>
    </div>
    <div class="text-container" v-if="text">
      <span v-text="text"/>
      <div class="date-container">
        {{ localDate }}
      </div>
    </div>
    <div class="image-date" v-else>
      {{ localDate }}
    </div>
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