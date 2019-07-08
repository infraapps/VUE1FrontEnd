<script>
import axios from "axios";
export default {
  data() {
    return {
      usuarios: []
    }
  },
  async created() {
    try {
      const res = await axios.get(
        "http://172.16.3.15/posventa/sebas/usuarios.php/usuarios");
      //console.log(res.data);
      this.usuarios = res.data
    } catch (error) {
      console.log(error);
    }
  },
    methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
}
};
</script>