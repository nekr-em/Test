<template>
  <div class="ml-8">
    <!--    <header-buttons ref="headerButtons" :people.sync="people"/>-->
    <!--    <people-list :people="people" :human.sync="human" :human-id.sync="humanId" @gett="gett"/>-->
    <!--    <update-input @gett="gett" :human="human" :human-id="humanId"/>-->
    <chat-message 
        class="ma-5" 
        :imgs-links="imgs"
        :text="text"
        :date="data" 
        username="Екатерина Некрасова" 
        reply-message-text="Привет, я написала ответ большой большой большой большой большой ьшой большой большой большой большой ьшой большой большой большой большой ьшой большой большой большой большой" 
        reply-message-user-name="Юлия Некрасова"
    />
  </div>
</template>

<script>

// import HeaderButtons from "@/components/HeaderButtons";
// import PeopleList from "@/components/PeopleList";
// import UpdateInput from "@/components/UpdateInput";
import ChatMessage from "@/components/ChatMessage";

export default {
  name: 'HomeView',
  data() {
    return {
      people: [],
      human: '',
      humanId: '',
      imgs: [
        'https://avatars.mds.yandex.net/i?id=657ea1cca0e664ed8c2046ab7148bd95-5220947-images-thumbs&n=13&exp=1',
        'https://avatars.mds.yandex.net/i?id=2a00000184de30a3be964f1106ea62c65f77-774647-fast-images&n=13&exp=1',
        'https://avatars.mds.yandex.net/i?id=2a00000184debd032ee75d3582c9a7aa1de7-1616940-fast-images&n=13&exp=1',
        'https://cdnn11.img.sputnik.by/img/07e6/0c/04/1069786631_0:0:2769:2047_1920x0_80_0_0_84a240910d736e4d67c2dbb290354eac.jpg',
        'https://cdnn21.img.ria.ru/images/07e6/0c/05/1836294920_0:0:3090:1738_1920x0_80_0_0_1602db465b4ec6cc59916ca204ade589.jpg',
        'https://s0.rbk.ru/v6_top_pics/media/img/8/63/756701742028638.jpg',
        'https://cdnn11.img.sputnik.by/img/07e6/0c/04/1069786631_0:0:2769:2047_1920x0_80_0_0_84a240910d736e4d67c2dbb290354eac.jpg',
        'https://cdnn21.img.ria.ru/images/07e6/0c/05/1836294920_0:0:3090:1738_1920x0_80_0_0_1602db465b4ec6cc59916ca204ade589.jpg',
        'https://s0.rbk.ru/v6_top_pics/media/img/8/63/756701742028638.jpg',
        'https://cdnn11.img.sputnik.by/img/07e6/0c/04/1069786631_0:0:2769:2047_1920x0_80_0_0_84a240910d736e4d67c2dbb290354eac.jpg',
        'https://cdnn21.img.ria.ru/images/07e6/0c/05/1836294920_0:0:3090:1738_1920x0_80_0_0_1602db465b4ec6cc59916ca204ade589.jpg',
        'https://s0.rbk.ru/v6_top_pics/media/img/8/63/756701742028638.jpg',
        // 'https://img.riamediabank.ru/images/vol5%2Fmedia%2Foriginal%2F0000%2F0833%2F29%2F000008332990_0%3A0%3A0%3A0_1400x1000_80_9_1_0JDQu9C10LrRgdC10Lkg0JTQsNC90LjRh9C10LIgIzgzMzI5OTA%3D_92%3A89_ria-8332990-preview_a29018b1146d3190a3487ef139013e77.jpg'
      ],
      text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки соответствующих условий активизации. Соображения высшего порядка, а также повышение уровня гражданского сознания влечет за собой процесс внедрения и модернизации дальнейших направлений развития проекта. Дорогие друзья, курс на социально-ориентированный национальный проект обеспечивает широкому кругу специалистов участие в формировании системы масштабного изменения ряда параметров.Таким образом, рамки и место обучения кадров создаёт предпосылки качественно новых шагов для экономической целесообразности принимаемых решений. Дорогие друзья, консультация с профессионалами из IT в значительной степени обуславливает создание модели развития. Равным образом начало повседневной работы по формированию позиции способствует повышению актуальности всесторонне сбалансированных нововведений. Повседневная практика показывает, что консультация с профессионалами из IT влечет за собой процесс внедрения и модернизации модели развития.',
      data: new Date(),
    }
  },
  components: {
    ChatMessage,
    // UpdateInput,
    // PeopleList,
    // HeaderButtons,

  },
  methods: {
    gett() {
      this.$refs.headerButtons.gett();
    },
  },
}
</script>
