import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: [
      'src/components/Admin/Product/FormularioProductos.jsx',
      'src/components/Admin/Product/Table/TablaFilaProductos.jsx',
      'src/components/Admin/Product/helpers.js',
      'src/components/Admin/Users/UserCard.jsx',
      'src/components/Auth/AuthMenu.jsx',
      'src/components/Auth/InputPassword.jsx',
      'src/components/Auth/LoginPage.jsx',
      'src/components/Auth/RegisterPage.jsx',
      'src/components/CardProduct/ProductCard.jsx',
      'src/components/CardProduct/ProductCardFinal.jsx',
      'src/components/CartModal/CartModal.jsx',
      'src/components/Common/Header/Header.jsx',
      'src/components/Common/navBar/Navbar.jsx',
      'src/components/DetailPage/AddToCartButton.jsx',
      'src/components/DetailPage/DetalledeProducto.jsx',
      'src/components/DetailPage/ProductDescription.jsx',
      'src/components/DetailPage/ProductHeader.jsx',
      'src/components/DetailPage/ProductImage.jsx',
      'src/components/HomeView/BackgroundImage.jsx',
      'src/components/HomeView/Logo.jsx',
      'src/components/ListProductClient/CardProductClient.jsx',
      'src/components/ListProductClient/ListProductClient.jsx',
      'src/components/PrincipalPage/PrincipalPage.jsx',
      'src/components/Profile/CardWelcome.jsx',
      'src/components/Profile/Menu.jsx',
      'src/components/TeamMember/TeamMember.jsx',
      'src/components/TeamMember/TeamMemberSocialIcons.jsx',
      'src/components/ui/InputProducto.jsx',
      'src/components/ui/NumberInput.jsx',
      'src/views/AboutUsView.jsx',
      'src/views/AdminOptions.jsx',
      'src/views/ContactView.jsx',
      'src/views/LoginRegisterView.jsx',
      'src/views/NotFoundView.jsx',
      'src/views/PrincipalProductoView.jsx',
      'src/views/ProductDetailView.jsx',
      'src/views/ProfileView.jsx',
      'src/views/UserManagament.jsx',
    ],
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
];
